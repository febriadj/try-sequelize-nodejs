const 
  express = require('express'),
  dotenv = require('dotenv').config({ path: './.env' }),
  app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(require('./routes/index'))

const port = process.env.PORT || 8080
app.listen(port, function(err) {
  if (err) return console.log(err)

  console.log('Server running on port:' + port)
})