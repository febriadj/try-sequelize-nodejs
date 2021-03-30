'use strict'

const router = require('express').Router()
const { getEmployee, postEmployee } = require('../controllers/employee')

router.get('/employee', getEmployee)
router.post('/employee', postEmployee)

module.exports = router