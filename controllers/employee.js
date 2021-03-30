const Employee = require('../models/employee')

exports.getEmployee = async function(req, res, next) {
  try {
    const employee = await Employee.findAll()
    res.status(200).json(employee)
  }
  catch(err) {
    console.log(err)
  }
}

exports.postEmployee = async function(req, res, next) {
  try {
    const { name, email, salary } = req.body
    await Employee.create({ name, email, salary })

    res.status(200).json({
      status: 'success',
      code: 200,
      message: 'managed to add employee'
    })
  }
  catch(err) {
    console.log(err)
  }
}