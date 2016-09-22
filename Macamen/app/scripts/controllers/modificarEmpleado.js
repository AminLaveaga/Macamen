
angular.module('macamenApp').controller('modificarEmpleadoCtrl',['$scope','$uibModalInstance','empleadoService','obj','$controller',function($scope,$uibModalInstance,empleadoService,obj,$controller){

  $.extend(this,$controller('empleadoCtrl',{$scope:$scope}));

  $scope.empleado={};

      $scope.obtenerEmpleado=function(id){

              empleadoService.consultarEmpleado(id).then(function(resul){
               $scope.empleado=resul.data;


              },function(error){});
      };


     $scope.obtenerEmpleado(obj.idEmpleado);



      $scope.cerrarVentana=function(){

          $uibModalInstance.close();

      };

      $scope.modificarEmpleado=function(){

        empleadoService.modificarEmpleado($scope.empleado).then(function(resul){
          $scope.$parent.obtenerEmpleados();
           $scope.cerrarVentana();
        },function(error){});

      }

}]);
