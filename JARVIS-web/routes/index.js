var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/day', (req, res, next) => {
    console.log(req.body)
    res.send('ok');
});

module.exports = router;
