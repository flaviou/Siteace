Meteor.subscribe("comments");

Template.comment_list.helpers({
	comments:function(){
		var websiteId = Session.get('websiteId');
		return Comments.find({websiteId: websiteId},{sort:{createdOn:-1}});
	}
});

Template.comment_form.events({
	"submit .js-save-comment-form":function(event){
		event.preventDefault();
		if (Meteor.user()) {
			var websiteId = Session.get('websiteId');
			var comment = event.target.comment.value;
			Meteor.call('insertComment', {websiteId: websiteId, comment: comment});
		}
		return false;// stop the form submit from reloading the page
	}
});
