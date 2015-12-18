Meteor.methods({
	insertWebsite: function (newDoc) {
		var loggedInUser = Meteor.user();
		newDoc['createdOn'] = new Date();
		newDoc['createdBy'] = Meteor.userId();
		
		var result = HTTP.call("GET", newDoc.url);
		var document = result.content;
		var $ = cheerio.load(document);
		var title = $("title").text();
		newDoc["title"] = title;
		newDoc["description"] = title;
		var meta = $("meta");
		var keys = Object.keys(meta);
		keys.forEach(function(key){
			if (  meta[key].attribs
			   && meta[key].attribs.property
			   && meta[key].attribs.property == "og:description") {
				   newDoc["description"] = meta[key].attribs.content;
			   }
		});
		Websites.insert(newDoc);
	}
});

