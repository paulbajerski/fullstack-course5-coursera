(function () {
	'use strict';

	angular
		.module('myFirstApp', [])
		.controller('myFirstController', function ($scope) {
			$scope.name = 'Pawel';
			$scope.sayHello = function () {
				return 'Hello coursera!';
			};
		});


})();