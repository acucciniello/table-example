var express = require('express')
var app = express()
const got = require('got')
const path = require('path')
var formatURL = require('./format-url.js')

app.listen(3000, function () {
  console.log('listening')
})

app.use(express.static('public/'))

app.get('/getNews', function (req, res) {
  var source = 'hacker-news'
  var sortBy = 'latest'
  var url = formatURL(source, sortBy)
  got(url)
    .then(response => {
      res.send(response.body)
    })
    .catch(error => {
      console.log(error.response.body)
      res.end('we failed')
    })
})

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'))
})
