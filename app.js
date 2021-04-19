(function () {
	'use strict';

	angular.module('MsgApp', [])
		.controller('MsgController', MsgController);

	MsgController.$inject = ['$scope'];

	function MsgController($scope) {
		$scope.name = "Yakov";
		$scope.sayMessage = function () {
			return $scope.name + " likes to eat healthy snacks at night!"
		}
	}

})();