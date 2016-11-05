(function()	{
	function PostsFactory() {
		var PostsFactory = {};
		PostsFactory.posts = [];
		
		PostsFactory.addPost = function(scope){
			if(!scope.title || scope.title === '') {
				return;
			}
			
			PostsFactory.posts.push({
				title: scope.title,
				link: scope.link,
				upvotes: 0
			});
			
			scope.title = '';
			scope.link = '';
		};
		
		PostsFactory.incrementUpvotes = function(post){
			post.upvotes += 1;
		};
		return PostsFactory;
		
	};
	
	angular
		.module('nodeNews')
		.factory('PostsFactory', [PostsFactory]);
	
	
})();