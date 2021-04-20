(function () {
	'use strict';

	angular.module('CounterApp', [])
		.controller('CounterController', CounterController);

	CounterController.$inject = ['$scope'];
	function CounterController($scope) {
		$scope.onceCounter = 0;
		$scope.counter = 0;
		$scope.name = 'Yaakov';

		$scope.showNumberOfWatchers = function () {
			console.log('# of Watchers: ' + $scope.$$watchersCount);
		};

		$scope.countOnce = function () {
			$scope.onceCounter = 1;
		};

		$scope.incrementCounter = function () {
			$scope.counter += 1;
		};

		$scope.$watch(function () {
			console.log("Digest loop fired!")
		})

		/* $scope.$watch('onceCounter', function (oldValue, newValue) {
			console.log('onceCounter oldValue: ' + oldValue)
			console.log('onceCounter newValue: ' + newValue)
		});

		$scope.$watch('counter', function (oldValue, newValue) {
			console.log('counter oldValue: ' + oldValue)
			console.log('counter newValue: ' + newValue)
		}); */

		/*

		Summary:

		Digest cycle: running digest loops until all watchers report that nothing has changed
			- dirty checking

		Several ways to set up watchers:
			- $scope.$watch - don't do this in a controller
			- {{ someProp }}
			- <input...ng-model="someProp"

		Only applies to things done inside of the Angular context

			*/
	}

})();