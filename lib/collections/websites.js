Websites = new Mongo.Collection("websites");

Websites.allow({
	insert: function(userid, doc) {
		return ((Meteor.user()) && (Meteor.user()._id == userid));
	},
	update: function(userid, doc) {
		return (Meteor.user());
	}
});