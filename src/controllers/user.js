const { createUser, getById, getUsers, updateUser, removeUser } = require('../repositories/user')

exports.create = async (req, res) => {
	try {
		const user = await createUser(req.body)
		res.status(200).send(user)
	} catch (e) {
		res.status(400).send(e)
	}
}

exports.get = async (req,res) => {
	try {
		const users = await getUsers(req.body)
		res.status(200).send(users)
	} catch (e) {
		res.status(200).send(e)
	}
}

exports.getId = async (req,res) => {
	try {
		const user = await getById(Number(req.params.id))
		res.status(200).send(user)
	}catch (e) {
		res.status(400).send(e)
	}
}

exports.update = async (req, res) => {
	try {
		const user = await updateUser(Number(req.params.id), req.body)
		res.status(200).send(user)
	} catch (e) {
		res.status(400).send(e)
	}
}

exports.remove = async (req, res) => {
	try {
		await removeUser(Number(req.params.id))
		res.status(200).send()
	} catch (e) {
		res.status(400).send(e)
	}
}