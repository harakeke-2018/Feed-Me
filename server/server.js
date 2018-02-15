const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')

const feedMeRoutes = require('./feedMeRoute')
const server = express()
server.use(bodyParser.urlencoded({extended: false}))

server.use(express.static(path.join(__dirname, '../public')))

server.use('/api/v1/feedme', feedMeRoutes)

module.exports = server
