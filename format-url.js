require('dotenv').config()

var apiKey = process.env.API_KEY
var url = 'https://newsapi.org/v1/articles'

module.exports = formatURL

function formatURL(source, sortBy) {
  var finalURL = url + '?apiKey=' + apiKey + '&source=' + source + '&sortBy=' + sortBy
  return finalURL
}
