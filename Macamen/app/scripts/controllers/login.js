angular.module("macamenApp").controller("loginCtrl",['$scope','$location',function($scope,$location){

var menu= document.getElementById("menu").style.visibility="hidden";
$scope.cambiarRuta =function(){
  $location.path('/mostrarCitas');

  // menu.style.visibility="visible";
}

}]);


