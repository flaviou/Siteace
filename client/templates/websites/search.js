Template.search_form.events({
	"submit .js-search":function(event){
		event.preventDefault();
		var keywords = event.target.keywords.value;
			Session.set("keywords", keywords);
			Router.go("searchResult");
		return false;// stop the form submit from reloading the page
	}
});

Template.search_result_list.helpers({
	results: function(){
		var keywords = Session.get("keywords");
		var search = new RegExp(keywords, 'i');
		return Websites.find({$or:[{description: search}, {url: search}, {title: search}]}, {sort:{upvotes:-1,title:1}});
	},
	hasResults: function(){
		var keywords = Session.get("keywords");
		var search = new RegExp(keywords, 'i');
		if (Websites.find({$or:[{description: search}, {url: search}, {title: search}]}).count() > 0) {
			return "sr-only";
		} else {
			return "";
		}
	}
});

Template.suggestion_result_list.helpers({
	results: function(){
		var keywords = Session.get("keywords");
		var words = keywords.split(" ");
		if (words.length > 1) {
			var condition = [];
			words.forEach(function(word) {
				var search = new RegExp(word, 'i');
				condition.push({description: search});
				condition.push({url: search});
				condition.push({title: search});
			});
			return Websites.find({$or:condition}, {sort:{upvotes:-1,title:1}});
		} else {
			return [];
		}
	},
	hasResults: function(){
		var keywords = Session.get("keywords");
		var words = keywords.split(" ");
		if (words.length > 1) {
			var condition = [];
			words.forEach(function(word) {
				var search = new RegExp(word, 'i');
				condition.push({description: search});
				condition.push({url: search});
				condition.push({title: search});
			});
			if (Websites.find({$or:condition}).count() > 0) {
				return "sr-only";
			} else {
				return "";
			}
		} else {
			return "";
		}
	}
});