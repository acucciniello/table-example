var xhr = require('xhr')

function getNews() {
  xhr.get('/', function (err, res) {
    if (err) {
      return console.log(err)
    }
    // console.log(res)
    console.log('hello')
    var articles = res.articles
    createTable(articles)
  })
}

function createTable (articles) {
  console.log(articles.length)
  var body = document.getElementsByTagName('body')[0]
  var table = document.getElementById('articles')
  var tableBody = document.createElement('tbody')
  for (i = 0; i < articles.length; i++) {
    var tableRow = document.createElement('tr')
    var articleCell = document.createElement('td')
    var authorCell = document.createElement('td')
    articleCell.appendChild(document.createTextNode(articles[i].title))
    authorCell.appendChild(document.createTextNode(articles[i].author))
    tableRow.appendChild(articleCell)
    tableRow.appendChild(authorCell)
    tableBody.appendChild(tableRow)
  }
  table.appendChild(tableBody)
  body.appendChild(table)
  console.log(body)
  return
}
