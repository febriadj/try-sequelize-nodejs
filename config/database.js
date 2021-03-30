const { Sequelize } = require('sequelize')

const conn = new Sequelize('projects', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
})

module.exports = conn