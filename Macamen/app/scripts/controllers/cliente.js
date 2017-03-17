
angular.module('macamenApp').controller('clienteCtrl',['$scope','clienteService','$uibModal','validacionService','growl','atomicNotifyService','inform',function($scope,clienteService,$uibModal,validacionService,growl,atomicNotifyService,inform){

document.getElementById("menu").style.visibility="visible";

    $scope.cliente={
                    id:'',
                    nombre:'',
                    direccion:'',
                    telefono:'',
                    ocupacion:'',
                    fNacimiento:''
                    };

     $scope.listaClientes=[];

      $scope.obtenerClientes=function(){
          clienteService.consultarClientes().then(function(result){
                $scope.listaClientes=result.data;
          },function(error){});
      };

      $scope.guardarCliente=function(frmCliente){

        if(frmCliente.$valid){
                    clienteService.guardarCliente($scope.cliente).then(function(result){
                        $scope.obtenerClientes();
                        $scope.cliente={


                                            nombre:'',
                                            direccion:'',
                                            telefono:'',
                                            ocupacion:'',
                                            fNacimiento:''
                                            };
                    },function(error){});
         validacionService.clearErrors(frmCliente);
        }else{
        validacionService.showErrors(frmCliente);
        inform.add('Existen campos que son requeridos para registrar clienteS', {
          ttl: 4000, type: 'warning'
        });
        }
      };

      $scope.eliminarCliente=function(id){
            clienteService.eliminarCliente(id).then(function(result){
                $scope.obtenerClientes();
            },function(error){});
      };

      $scope.modificarCliente=function(id){

         var modalInstance=$uibModal.open({
                        templateUrl:'views/modificarCliente.html',
                        controller:'modificarClienteCtrl',
                        scope:$scope,
                        resolve:{
                              obj:function(){
                                return {idCliente:id}

                              }
                        }

         });
      };
      $scope.obtenerClientes();

}]);
