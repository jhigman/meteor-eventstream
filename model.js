Events = new Meteor.Collection("events");
Counters = new Meteor.Collection("counters");


var addEvent = function () {
  Events.insert({name: "another meetup", date : "03 Jul 2013"});
};
