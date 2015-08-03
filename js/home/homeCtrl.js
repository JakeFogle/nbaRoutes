var app = angular.module('nbaRoutes');

app.controller('homeCtrl', function($scope, $q, teamService, teamData){

	$scope.teamData = teamData;
	console.log($scope.teamData)

	for(var i = 0; i < $scope.teamData.length; i++){
		if($scope.teamData[i][0].homeTeam === 'utahjazz'){
			$scope.teamData[i].homeTeam = 'Utah Jazz',
			$scope.teamData[i].logoPath = '../images/jazz-logo.png';
		} else if($scope.teamData[i][0].homeTeam === 'losangeleslakers'){
			$scope.teamData[i].homeTeam = 'Los Angeles Lakers';
			$scope.teamData[i].logoPath = '../images/lakers-logo.png';
		} else if($scope.teamData[i][0].homeTeam === 'miamiheat'){
			$scope.teamData[i].homeTeam = 'Miami Heat';
			$scope.teamData[i].logoPath = '../images/heat-logo.png';
		}
	}
});