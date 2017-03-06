
angular.module('macamenApp').controller('modificarEmpleadoCtrl',['$scope','$uibModalInstance','empleadoService','obj','$controller',function($scope,$uibModalInstance,empleadoService,obj,$controller){

  $.extend(this,$controller('empleadoCtrl',{$scope:$scope}));

  $scope.empleado={
                      id:"",
                      nombre:"",
                      direccion:"",
                      telefono:"",
                      fNacimiento:""
      };

      $scope.obtenerEmpleado=function(id){

              empleadoService.consultarEmpleado(id).then(function(resul){
               $scope.empleado.id=resul.data.id;
               $scope.empleado.nombre=resul.data.nombre;
               $scope.empleado.direccion=resul.data.direccion;
               $scope.empleado.telefono=resul.data.telefono;
               $scope.empleado.fNacimiento= new Date(""+resul.data.fNacimiento);


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
