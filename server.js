// require express and other modules
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser');

// configure body-parser (for form data)
app.use(bodyParser.urlencoded({ extended: true }));

// use public folder for static files
app.use(express.static(__dirname + '/public'));

// set hbs as server view engine
app.set('view engine', 'hbs');


// HOMEPAGE ROUTE

app.get('/', function (req, res) {
  res.render('index');
});


// API ROUTES

// test data
var allWorkouts = [
  { exercise: 'Ran 3 miles', category: 'cardio' },
  { exercise: 'Yoga', category: 'stretching' }
];

app.get('/api/workouts', function (req, res) {
  res.json({ workouts: allWorkouts });
});


// start server on localhost:3000
app.listen(3000, function() {
  console.log('server started');
});