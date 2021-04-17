const express = require('express')
const path = require('path')
const morgan = require('morgan')
const cors = require('cors')

const app = express()
app.use(morgan('dev'))

const heroRouter = require('./routes/heroRoutes')

// body parser, reads data from body into req.body
app.use(express.json())

// allow cors
app.use(cors())

// Route for the API
app.use('/api/heros', heroRouter)

// serve static file for production 
if (process.env.NODE_ENV = 'production') {
    // serve the react app
    app.use(express.static(__dirname + '/build'))

    // serve as single page application 
    app.get(/.*/, (req, res, next) => {
        res.sendFile(__dirname + '/build/index.html')
    })
}

module.exports = app
