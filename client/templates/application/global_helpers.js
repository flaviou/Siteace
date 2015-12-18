Template.registerHelper("gh_user_email", (userId) => {
	var user = Meteor.users.findOne({_id: userId});
	return user.emails[0].address;
});

Template.registerHelper("gh_user_full_name", (userId) => {
	var user = Meteor.users.findOne({_id: userId});
	if (user) {
		return user.profile.full_name;
	} else {
		return 'Anonymous';
	}
});

Template.registerHelper("gh_disabled", () => {
	if (Meteor.user()) {
		return "";
	} else {
		return "disabled";
	}
});

Template.registerHelper("gh_upvote_count", (websiteId) => {
	var website = Websites.findOne({_id:websiteId});
	var votes = 0;
	if ((website) && (website.upvotes)) {
		votes = website.upvotes;
	}
	return votes;
});

Template.registerHelper("gh_downvote_count", (websiteId) => {
	var website = Websites.findOne({_id:websiteId});
	var votes = 0;
	if ((website) && (website.downvotes)) {
		votes = website.downvotes;
	}
	return votes;
});

Template.registerHelper("gh_comment_count", (websiteId) => {
	return Comments.find({websiteId: websiteId}).count();
});

Template.registerHelper("gh_show_warning", () => {
	if (Meteor.user()) {
		return "sr-only";
	} else {
		return "";
	}
});
