const express = require('express')
const path = require('path')

// Set up Express
var app = express()
var PORT = process.env.PORT || 3000

// Parse Body as JSON
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// Serve static pages from Public folder
app.use(express.static('./app.public'))

// Routes
require('./app/routing/apiRoutes.js')(app)
require('./app/routing/htmlRoutes.js')(app)


// Express Listening Port
app.listen(PORT, () => {
    // Log (server-side) when our server has started
    console.log(`Server listening on: http://localhost:${PORT}`)
})