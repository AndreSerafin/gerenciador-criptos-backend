const { getUser } = require('../repositories/auth')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { authValidation } = require('../validations/auth')

exports.login = async (req, res) => {
	try {
		const data = await authValidation.parse(req.body)
		const user = await getUser(data.email)

		if(!user) throw {message: 'User does not exist'}

		if(user && bcrypt.compareSync(req.body.password, user.password)){
			const token = jwt.sign(
				{
					id: user.id,
					email: user.email,
					name: user.name
				},
				process.env.TOKEN_KEY,
				{
					expiresIn: process.env.TOKEN_EXPIRES_IN
				}
			)
			return res.status(200).send({ token })
		} {
			return res.status(401).send({message: 'User and/or password are incorrect'})
		}
	} catch (e) {
		res.status(400).send(e)
	}
}