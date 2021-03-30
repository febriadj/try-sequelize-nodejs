const { Sequelize } = require('sequelize')
const conn = require('../config/database')

const { DataTypes } = Sequelize

const Employee = conn.define('employee', {
  name: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING
  },
  salary: {
    type: DataTypes.INTEGER
  }
})

module.exports = Employee