var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var WorkoutSchema = new Schema({
  exercise: String,
  category: String
});

var Workout = mongoose.model('Workout', WorkoutSchema);
module.exports = Workout;