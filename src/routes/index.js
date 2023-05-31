const { userRoutes } = require('./user')
const { authRoutes } = require('./auth')

module.exports = (app) => {
	userRoutes(app)
	authRoutes(app)
}