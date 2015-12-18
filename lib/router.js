Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound'
});
Router.route('/', function() {
	this.render('websites', {
		to: "main"
	});
});
Router.route('/profileEdit', function() {
	this.render('profileEdit', {
		to: "main"
	});
});

Router.route('/website/:_id', function() {
console.log('/website/id');
console.log(this.params._id);	
	this.render('website_detail', {
		to: "main",
		data: function() {
			return Websites.findOne({_id: this.params._id});
		}
	})
});
Router.route('/searchResult', function() {
	this.render('search_results_page', {
		to: "main"
	});
});
/*
Router.route('/users', {
	name: 'usersList',
	template: 'usersList',
	data: function() {
		if (Roles.userIsInRole(Meteor.user(), ['admin'], 'default-group')) {
			Meteor.users.find();
		} else {
			if (Meteor.isClient) {
				Router.go('/');
				throwError('Access Denied');
			}
		}
	}
});
Router.onBeforeAction('dataNotFound', {only: 'entryPage'});
*/

