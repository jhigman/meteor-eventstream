Meteor.startup(function () {
    
    // if (Events.find().count() === 0) {
    //   var names = ["Meetup 1",
    //                "Meetup 2",
    //                "Gathering 123",
    //                "Drinks 69"];
    //   var dates = ["01 Mar 2013",
    //                "06 Mar 2013",
    //                "12 Apr 2013",
    //                "27 Jun 2013"];
    //   for (var i = 0; i < names.length; i++)
    //     Events.insert({name: names[i], date: dates[i]});
    // }

	Meteor.setInterval(getFeed, 10000);

    Counters.insert({name: "users", total: 0});

    Session.set("index", 0);
});


var getFeed = function () {

	
	var url = 'http://julianhigman.com/blog/comments/feed/';
    url = 'http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&q=' + encodeURIComponent(url);

	var result = Meteor.http.get(url, {});

	if (result.statusCode === 200) {
		var entries = result.data.responseData.feed.entries;
		index = Session.get("index");
		try {
			console.log(entries[index]['title']);		
			console.log(entries[index]['publishedDate']);
			Events.insert({name: entries[index]['title'], date: entries[index]['publishedDate']})		
			Session.set("index", index+1);
		    // console.log(result.data); //JSON content
		    // console.log(result.content); //raw content
		} catch (err) {
			Session.set("index",0);
		}
	}


}

