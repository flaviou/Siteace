Meteor.methods({
	insertComment: function (newDoc) {
		var loggedInUser = Meteor.user();
		newDoc['createdOn'] = new Date();
		newDoc['createdBy'] = Meteor.userId();
		Comments.insert(newDoc);
	}
});
