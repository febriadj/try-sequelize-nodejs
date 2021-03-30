'use strict'

const router = require('express').Router()
const { getEmployee, postEmployee, deleteEmployee } = require('../controllers/employee')

router.get('/employee', getEmployee)
router.post('/employee', postEmployee)
router.delete('/employee/:id', deleteEmployee)

module.exports = router