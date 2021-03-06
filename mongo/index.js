var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/musto');
mongoose.Promise = global.Promise;

var UsersSchema = mongoose.Schema({
  id: {type: String},
  facebook_id: {type: String},
  github_id: {type: String},
  twitter_id: {type: String},
  passwd: {type: String},
  name: {type: String},
  token: {type: String},
});

var ScheduleSchema = mongoose.Schema({
  owner: {type: String},
  Date: {type: String},
  shcedules:[{
    title: {type: String},
    content: {type: String},
    start_time: {type: String},
    end_time: {type: String}
  }]
});

Users = mongoose.model("users", UsersSchema);
Schedules = mongoose.model("schedules", ScheduleSchema);
exports.Users = Users;
exports.Schedules = Schedules;
exports.db = db;
