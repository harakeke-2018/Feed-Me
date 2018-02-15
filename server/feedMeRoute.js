const express = require('express')
const data = require('../data')
const bodyParser = require('body-parser')
const people = data.people

const router = express.Router()

router.use(bodyParser.json())

router.get('/getdata', (req, res) => {
  res.json(data)
})

router.post('/addcomment', (req, res) => {
  const userID = req.body.id
  const newComment = req.body.comment
  const emoji = req.body.emoji
  const target = people.find(person => {
    return userID == person.id
  })
  const comments = target.comments
  comments.push(newComment)
  const emojis = target.emojis
  emojis[emoji] += 1
  res.status(200).send()
})

module.exports = router
