// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
const express = require('express'), // call express
    app = express(),                // define our app using express
    bodyParser = require('body-parser'), cors = require('cors'),
      helmet = require('helmet'), fs = require('fs'), https = require('https'),
      port = process.env.PORT || 5050, // set our port
    privateKey = fs.readFileSync('/home/pietsmailserver/ssl.key', 'utf8'),
      certificate = fs.readFileSync('/home/pietsmailserver/ssl.cert', 'utf8');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(helmet());
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use(cors());
app.use(helmet());

// ROUTES FOR OUR API
// =============================================================================
const router = express.Router(); // get an instance of the express Router

// test route to make sure everything is working (accessed at GET
// http://localhost:8080/api)
router.get('/landing', function(req, res) {
  res.send({
    name : 'Pieter Rees',
    title : "Capt'n Stylesauce",
  });
});

router.get('/about', function(req, res) {
  res.send({
    title : 'The guy',
    copy :
        'My name is Pieter Rees. I am a Developer with a passion for clean coding and perfect design. I am currently working @ Goodup, a do-good crowd funding platform in the beautiful city of Amsterdam. I love to work with modern development stacks.',
  });
});

router.get('/skills', function(req, res) {
  res.send({
    title : 'Skills',
    skill1 : 'Development',
    skill1Copy :
        'I am a frontend architect with a passion for beautiful user experience. I will build your website with passion and pace. Based on the latest technology stack. That means I speak primarily Html(5), (Sc,Le)ss and Javascript (vanilla and frameworks). I also love some Backend.',
    skill2 : 'UX',
    skill2Copy :
        'The design of an app or website is useless without an effective and efficient user experience. I strongly believe that a great and beautyful website experience will extend your brand feeling and connect you with new people. It starts with prototyping and ends with testing of the final product. I use Pen & Paper, Balsamiq, Sketch and Axure.',
  });
});

router.get('/work', function(req, res) {
  res.send({
    title : 'Work?',
    copy :
        "Besides my work for the best 'do good' platform in Amsterdam, i am also a code hobbyist with allmost 6 years experience in frontend development. I am allways up for a nice talk about innovative ideas. Please drop me a line.",
  });
});

router.get('/footer', function(req, res) {
  res.send({
    lfw : 'Made with 💙 in Amsterdam',
    licence : 'Released under the DBAD PUBLIC LICENCE',
  });
});

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
https
    .createServer({
      key : privateKey,
      cert : certificate,
    },
                  app)
    .listen(port);
console.log('Magic happens on port ' + port);
