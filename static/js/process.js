//AngularJS js file
var formProcess = angular.module('formProcess', []);

formProcess.controller('ProcessCtrl', function ($scope) {
	$scope.forms = [
		{id: '008907498', name: 'Liang Wu', status: '1', formlink: 'pdf/1.pdf'},
		{id: '008907321', name: 'David Smith', status: '2', formlink: 'pdf/2.pdf'},
		{id: '004224211', name: 'Na Zhao', status: '3', formlink: 'pdf/3.pdf'},
		{id: '005211421', name: 'Fan Yu', status: '0', formlink: 'pdf/4.pdf'}
	];

	$scope.pass = function (form) {
		var index = $scope.forms.indexOf(form);
		$scope.forms[index].status = '3';
	}

	$scope.reject = function (form) {
		var index = $scope.forms.indexOf(form);
		$scope.forms[index].status = '2';
	}

	$scope.predicate = '-status';

	$scope.statusArray = ["Wait", "Update", "Rejcted", "Pass"];

	$scope.totalForms = $scope.forms.length;
	$scope.totalWait = function () {
		var count = 0;
		for (var form in $scope.forms) {
			if ($scope.forms[form].status != '3') {
				count +=1;
			};
		}
		return count;
	}
});