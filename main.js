var xhr = require('xhr')

function getNews() {
  xhr.get('/getNews', function (err, res) {
    if (err) {
      return console.log(err)
    }
    var response = JSON.parse(res.body)
    var articles = response.articles
    createTable(articles)
  })
}

window.getNews = getNews

function createTable (articles) {
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
  return
}
