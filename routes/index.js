var express = require('express');
var router = express.Router();
var rss = require('../models/rss');

router.get('/', function(req, res, next) {
  rss(function(err, parsed) {
    if (err) throw err;

    res.render('index', parsed.feed);
  });
});

router.get('/news/:count?', function(req, res, next) {
  rss(function(err, parsed) {
    var link = 'https://www.057.ua/news/' + req.params.count;

    if (err) throw err;

    for (var key in parsed.feed.entries) {
      if (parsed.feed.entries[key].link === link) {
        var data = {
          parsedHtml: parsed.feed.entries[key]['content:encoded'],
          originalLink: link
        };

        res.render('news', data);
      }
    }
  });
});

module.exports = router;
