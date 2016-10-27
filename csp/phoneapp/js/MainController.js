app.controller('MainController', ['$scope', '$http', function($scope, $http){

	/*
	Only for testing purposes we can add fixed data  to the $scope

	$scope.phonelist = [
		{
			img: 'img/test-greenphone.png',
			model: 'Green Phone', 
			manufacturer: 'Apple', 
			price: 123.45 
		}, 
		{ 
			img: 'img/test-redphone.png',
			model: 'Red Phone', 
			manufacturer: 'Apple', 
			price: 234.56
		}, 
		{ 
			img: 'img/test-bluephone.png',
			model: 'Blue Phone', 
			manufacturer: 'LG', 
			price: 345.67
		}
	];
	*/

	// Do a HTTP GET to our application API
	$http.get('/phoneapp/api/phones').success(function(data) {
		$scope.phonelist = data;
	});


}]);