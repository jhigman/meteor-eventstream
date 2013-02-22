Meteor.subscribe("counters");


Template.eventstream.greeting = function () {
	return "Welcome to eventstream.";
};

Template.eventstream.counters = function () {
	return Counters.findOne({name : "users"});
};

Template.eventstream.eventslist = function () {
	return Events.find();
};

Template.eventstream.events({
	'click input.clear' : function () {
	  Events.remove({});
	  if (typeof console !== 'undefined')
	    console.log("You pressed the clear button");
	}
});

Meteor.startup(function () {
	Counters.update({name:"users"}, {$inc: {total: 1}});
});
