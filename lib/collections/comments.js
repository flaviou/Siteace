Comments = new Mongo.Collection("comments");

Comments.allow({
	insert: function(userid, doc) {
		return (Meteor.user());
	},
	update: function(userid, doc) {
		return (Meteor.user());
	}
});