var express = require('express');
var router = express.Router();
 //sample messages here
 const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

// end here
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'mini messageboard',
messages: messages
   }); 
});
router.get('/new', function (res, res, next) {
  res.render('new');
});
router.post('/new', (req, res) => {
  const { user, text } = req.body;
  messages.push({ user, text, added: new Date() });
  res.redirect('/');
});

module.exports = router;
