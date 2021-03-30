'use strict'

const router = require('express').Router()
const { 
  getEmployee, 
  postEmployee, 
  deleteEmployee, 
  updateEmployee 
} = require('../controllers/employee')

router.get('/employee', getEmployee)
router.post('/employee', postEmployee)
router.delete('/employee/:id', deleteEmployee)
router.put('/employee/:id', updateEmployee)

module.exports = router