(function () {
	'use strict';

	angular.module('LunchCheck', [])
		.controller('LunchCheckerCtrl', LunchCheckerCtrl);

	LunchCheckerCtrl.$inject = ['$scope'];

	function LunchCheckerCtrl($scope) {
		$scope.dishes = '';
		$scope.message = '';
		$scope.emptyItemMessage = '';

		$scope.checkIfTooMuch = function () {
			if ($scope.dishes === '') {
				$scope.message = 'Please enter lunch items first.';
				$scope.emptyItemMessage = '';
				return;
			}

			var dishes = $scope.dishes.split(',');
			var hasEmpties = findEmptyItems(dishes);

			if (hasEmpties !== undefined) {
				$scope.emptyItemMessage = 'Empty items, i.e., ", ," are not counted.'
				dishes = removeEmptyItems(dishes);
			} else {
				$scope.emptyItemMessage = '';
			}

			if (dishes.length <= 3) {
				$scope.message = '3 or less... Enjoy!';
			} else {
				$scope.message = 'More than 3 is too much!';
			}

			function findEmptyItems(array) {
				return array.find(i => i.trim() === "");
			}

			function removeEmptyItems(array) {
				return array.filter(i => i.trim() !== "")
			}
		}
	};

})();