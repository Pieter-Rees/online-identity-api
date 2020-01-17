// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
const express = require('express'), // call express
  app = express(), // define our app using express
  bodyParser = require('body-parser'),
  cors = require('cors');
// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const port = process.env.PORT || 5050; // set our port

// ROUTES FOR OUR API
// =============================================================================
const router = express.Router(); // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
  res.json({
    landing: { name: 'Pieter Rees', title: "Capt'n Stylesauce" },
    about: {
      title: 'The guy',
      copy:
        'My name is Pieter Rees. I am a Developer with a passion for clean coding and perfect design. I am currently working @ Goodup, a do-good crowd funding platform in the beautiful city of Amsterdam. I love to work with modern development stacks.',
    },
    skills: {
      title: 'Skills?',
      subtitle: 'Development',
      copy1: 'hooray! welcome to our api!',
    },
    work: { title: 'work', message2: 'hooray! welcome to our api!' },
    footer: { title: 'footer', message2: 'hooray! welcome to our api!' },
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
