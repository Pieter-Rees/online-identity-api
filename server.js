// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
const express = require('express'), // call express
  app = express(), // define our app using express
  bodyParser = require('body-parser'),
  cors = require('cors'),
  helmet = require('helmet');
// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(helmet());
const port = process.env.PORT || 5050; // set our port

// ROUTES FOR OUR API
// =============================================================================
const router = express.Router(); // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/landing', function(req, res) {
  res.send({
    name: 'Pieter Rees',
    title: 'Develops Stuff',
  });
});

router.get('/about', function(req, res) {
  res.send({
    title: 'The guy',
    copy:
      'My name is Pieter Rees. I am a Developer with full stack experience and a huge interest for everything that is related to electronics and technology.',
  });
});

router.get('/skills', function(req, res) {
  res.send({
    title: 'Skills',
    skill1: 'Frontend',
    skill1Copy:
      'Fronted Development is something i adore. My biggest passion is to deliver meaningfull software focussed on a streamlined user design and peformance. Usibility shoud be a fundamental right.',
    skill2: 'Backend',
    skill2Copy:
      "I am getting highly enthausiastic from server side applications, API's, NodeJS, Python, databases, security, requests and responds. The whole shabang.",
    skill3: 'Devops',
    skill3Copy:
      "Nothing can reach it's potential without a streamlined build and deploy process. Let's provide continuous delivery with high software quality.",
  });
});

router.get('/hobbys', function(req, res) {
  res.send({
    title: 'Hobbys',
    hobby1: 'IOT',
    hobby1Copy:
      'I enjoy myself with almost everything that has an ip address. From single board computers to home automation systems, i love it all.',
    hobby2: 'RC',
    hobby2Copy:
      'If it is controlable from a distance, i love it. I am interested DIY drone building and everything related.',
    hobby3: 'Linux',
    hobby3Copy:
      'Sometimes i play around for days fiddeling with Linux. Preffered OS: Arch',
    hobby4: 'Ancient tech',
    hobby4Copy:
      'In these moders times people should respect the elders. I will get highly enthaustastic from ancient and not so ancient tech.',
    hobby5: 'Food',
    hobby5Copy:
      'From fermentation to Sous-vide, i appriciate good cooking and good prepared food.',
  });
});

router.get('/work', function(req, res) {
  res.send({
    title: 'Work?',
    copy:
      'Currently i am working @ GoodUp. We provide The #1 tech solution for activating employees on your company purpose. I am allways up for a nice talk about innovative ideas. Please drop me a line via E-mail.',
  });
});

router.get('/footer', function(req, res) {
  res.send({
    lfw: 'Made with 💙 in Amsterdam',
    licence: 'Released under the DBAD PUBLIC LICENCE',
  });
});

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
