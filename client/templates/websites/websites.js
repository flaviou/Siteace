Meteor.subscribe('users');
Meteor.subscribe("websites");

Template.website_form.helpers({
	isEnabled: function() {
		if (Meteor.user()) {
			return "";
		} else {
			return "disabled";
		}
	}
});

Template.website_form.rendered = function() {
	$('[data-toggle="popover"]').popover();
};

// helper function that returns all available websites
Template.website_list.helpers({
	websites:function(){
		return Websites.find({},{sort:{upvotes:-1,title:1}});
	}
});

Template.website_item.helpers({
	popup_msg: function () {
		if (Meteor.user()) {
			return "";
		} else {
			return "Sign in to vote";
		}
	}
});
/////
// template events 
/////

Template.website_item.events({
	"click .js-upvote":function(event){
		// example of how you can access the id for the website in the database
		// (this is the data context for the template)
		var website_id = this._id;
		// put the code in here to add a vote to a website!
		Websites.update({_id: website_id}, {$inc:{upvotes: 1}});

		return false;// prevent the button from reloading the page
	}, 
	"click .js-downvote":function(event){

		// example of how you can access the id for the website in the database
		// (this is the data context for the template)
		var website_id = this._id;
		console.log("Down voting website with id "+website_id);
		Websites.update({_id: website_id}, {$inc:{downvotes: 1}});

		// put the code in here to remove a vote from a website!

		return false;// prevent the button from reloading the page
	}
})

Template.website_form.events({
	"click .js-toggle-website-form":function(event){
		$("#website_form").toggle('slow');
	}, 
	"submit .js-save-website-form":function(event){
		event.preventDefault();
		if (Meteor.user()) {
			// here is an example of how to get the url out of the form:
			var url = event.target.url.value;
			//var title = event.target.title.value;
			//var description = event.target.description.value;

		//  put your website saving code in here!	
			//Meteor.call('insertWebsite', {'url': url, 'title': title, 'description': description});
			Meteor.call('insertWebsite', {'url': url});
			$("#btn-plus").click();
		}
		return false;// stop the form submit from reloading the page

	}
});

Template.website_detail.helpers({
	popup_msg: function () {
		Session.set('websiteId', this._id);
		if (Meteor.user()) {
			return "";
		} else {
			return "Sign in to vote";
		}
	}
});

Template.website_detail.events({
	"click .js-upvote":function(event){
		// example of how you can access the id for the website in the database
		// (this is the data context for the template)
		var website_id = this._id;
		// put the code in here to add a vote to a website!
		Websites.update({_id: website_id}, {$inc:{upvotes: 1}});

		return false;// prevent the button from reloading the page
	}, 
	"click .js-downvote":function(event){

		// example of how you can access the id for the website in the database
		// (this is the data context for the template)
		var website_id = this._id;
		Websites.update({_id: website_id}, {$inc:{downvotes: 1}});

		return false;// prevent the button from reloading the page
	}
})
