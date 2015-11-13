$(function() {
  
  // compile handlebars template
  var source = $('#workouts-template').html();
  var template = Handlebars.compile(source);

  // array of test data
  var allWorkouts = [
    { exercise: 'Ran 3 miles', category: 'cardio' },
    { exercise: 'Yoga', category: 'stretching' }
  ];

  var workoutsHtml = template({ workouts: allWorkouts });
  $('#workouts-list').append(workoutsHtml);

});