angular.module("macamenApp").controller("loginCtrl",['$scope','$location',function($scope,$location){

$scope.cambiarRuta =function(){
  $location.path('/citas');
}

}]);


