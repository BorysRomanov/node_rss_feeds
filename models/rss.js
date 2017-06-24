var parser = require('rss-parser');

var parseRSS = function(callback) {
  parser.parseURL('https://www.057.ua/rss', {maxRedirects: 3}, callback);
};

 module.exports=parseRSS;
