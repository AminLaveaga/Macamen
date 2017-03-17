angular.module('macamenApp').controller('empleadoCtrl',['$scope','empleadoService','$uibModal','validacionService','inform',function($scope,empleadoService,$uibModal,validacionService,inform){

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

          $scope.guardarEmpleado= function(frmEmpleado){
            if(frmEmpleado.$valid){
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

                validacionService.clearErrors(frmEmpleado);
            }else{
                validacionService.showErrors(frmEmpleado);
                inform.add('Existen campos que son requeridos para registrar Empleado',{ttl:4000, type:'warning'});

            };


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
