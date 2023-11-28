const express = require('express');
const bodyParser = require('body-parser');
const app = express()
const port = 3000

// Middleware to parse JSON in the request body
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Middleware to serve static files from the 'public' folder
app.use(express.static('public'))

// Import routes from 'routes.js'
const routes = require('./src/routes')
app.use('/', routes)

// Start the server on the specified port
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})
