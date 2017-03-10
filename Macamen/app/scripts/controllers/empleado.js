angular.module('macamenApp').controller('empleadoCtrl',['$scope','empleadoService','$uibModal',function($scope,empleadoService,$uibModal){

document.getElementById("menu").style.visibility="visible";

          $scope.empleado={
                            id:"",
                            nombre:"",
                            direccion:"",
                            telefono:"",
                            fNacimiento:"",
                            estado:""
          };

          $scope.listaEmpleados=[];

          $scope.obtenerEmpleados=function(){
                    empleadoService.consultarEmpleados().then(function(result){
                        $scope.listaEmpleados=result.data;
                    },function(error){});
          };

          $scope.guardarEmpleado= function(){
                empleadoService.guardarEmpleado($scope.empleado).then(function(result){
                          $scope.empleado={
                                                      id:"",
                                                      nombre:"",
                                                      direccion:"",
                                                      telefono:"",
                                                      fNacimiento:""
                                    };

                $scope.obtenerEmpleados();
                },function(error){});


          };

          $scope.eliminarEmpleado=function(id){
            empleadoService.eliminarEmpleado(id).then(function(result){
              $scope.obtenerEmpleados();
            },function(error){});
          };


          $scope.modificarEmpleado=function(id){

            var modalInstance=$uibModal.open({

                      templateUrl:'views/modificarEmpleado.html',
                      controller:'modificarEmpleadoCtrl',
                      scope:$scope,
                      resolve:{
                            obj:function(){
                                return {idEmpleado:id}
                            }

                      }
            });

          };


$scope.obtenerEmpleados();






}]);
