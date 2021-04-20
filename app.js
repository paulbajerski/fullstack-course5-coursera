(function () {
	'use strict';

	angular.module('CounterApp', [])
		.controller('CounterController', CounterController);

	CounterController.$inject = ['$scope'];
	function CounterController($scope) {
		$scope.onceCounter = 0;
		$scope.counter = 0;

		$scope.showNumberOfWatchers = function () {
			console.log('# of Watchers: ' + $scope.$$watchersCount);
		};

		$scope.countOnce = function () {
			$scope.onceCounter = 1;
		};

		$scope.incrementCounter = function () {
			$scope.counter += 1;
		};

		$scope.$watch('onceCounter', function (oldValue, newValue) {
			console.log('onceCounter oldValue: ' + oldValue)
			console.log('onceCounter newValue: ' + newValue)
		});

		$scope.$watch('counter', function (oldValue, newValue) {
			console.log('counter oldValue: ' + oldValue)
			console.log('counter newValue: ' + newValue)
		});

		console.log($scope)
	}

})();