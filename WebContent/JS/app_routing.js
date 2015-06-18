
var app = angular.module("myRouting", ['ngRoute']);

app.controller("homeCntl",function($scope){
	$scope.x="hello"
		$scope.frst=false;
		$scope.frm=true;
		$scope.showFrm=function(){
			$scope.frm=false;
			$scope.frst=true;
		};
		
		$scope.scnShw=true;
	$scope.dsName=function(){
		var dates = new Date();
		var time = dates.getHours();
		if (time <12){
			$scope.k="morning"
		}
		else{
			$scope.k="evening"
				};
		
		$scope.s=$scope.shwName;
		$scope.scnShw=false;
		$scope.frm=false;
		$scope.frst=true;
		$scope.shwName="";
	};	
		
		
		
		
});

app.controller("bioCntl",function($scope){
	$scope.x="biography"
});

app.controller("contactCntl",function($scope){
	$scope.x="contact us at 800 818 8181"
});

app.config(function($routeProvider){
	$routeProvider.when('/home', {
		templateUrl: 'routing_home.html', 
		controller: 'homeCntl'
}).when('/bio', {
	templateUrl: 'routing_bio.html',
	controller: 'bioCntl'
}).when('/contact', {
	templateUrl: 'routing_cont.html',
	controller: 'contactCntl'
}).otherwise({ redirectTo: '/home' });
});



