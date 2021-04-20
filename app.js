(function () {
	'use strict';

	angular.module('CounterApp', [])
		.controller('CounterController', CounterController);

	CounterController.$inject = ['$scope', '$timeout'];
	function CounterController($scope, $timeout) {

		$scope.counter = 0;

		// using $timeout service
		$scope.upCounter = function () {
			$timeout(function () {
				$scope.counter++;
				console.log("Counter incremented");
			}, 2000);
		};


		// using $apply - exceptions will be seen in angular context
		/* $scope.upCounter = function () {
			setTimeout(() => {
				$scope.$apply(function () {
					$scope.counter++;
					console.log("Counter incremented");
				});
			}, 2000);
		}; */

		// using $digest - won't catch errors inside setTimeout fn, exceptions will not be seen in angular context
		/* $scope.upCounter = function () {
			setTimeout(() => {
				$scope.counter++;
				console.log("Counter incremented");
				$scope.$digest();
			}, 2000);
		}; */

	}

})();

/*

Summary

Digest Cycle does not get triggered automatically if events are unaware of Angular

Solution:
	- Call $digest after your custom code
	- Wrap your custom code inside of $apply
	- Find Angular specific service that handles the same functionality, e.g., $timeout

*/