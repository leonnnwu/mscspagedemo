//AngularJS js file
var formProcess = angular.module('formProcess', []);

formProcess.controller('ProcessCtrl', function ($scope, $http) {
	$scope.forms = [];

	$http.get('static/students.json').success(function(data) {
		$scope.forms = data;
	});

	$scope.pass = function (form) {
		var index = $scope.forms.indexOf(form);
		$scope.forms[index].status = '3';
	};

	$scope.reject = function (form) {
		var index = $scope.forms.indexOf(form);
		$scope.forms[index].status = '2';
	};

	$scope.predicate = '-status';

	$scope.statusArray = ["Wait", "Update", "Rejcted", "Pass"];

	$scope.totalForms = function () {
		return $scope.forms.length;
	};

	$scope.totalWait = function () {
		var count = 0;
		for (var form in $scope.forms) {
			if ($scope.forms[form].status != '3') {
				count +=1;
			};
		}
		return count;
	};
});