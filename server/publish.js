Meteor.publish('websites', function(){
  return Websites.find();
});

Meteor.publish('comments', function(){
  return Comments.find();
});

Meteor.publish('users', function() {
	return Meteor.users.find({},{fields: {'profile':1}});
});
