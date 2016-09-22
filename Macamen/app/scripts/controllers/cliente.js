
angular.module('macamenApp').controller('clienteCtrl',['$scope','clienteService','$uibModal',function($scope,clienteService,$uibModal){

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

      $scope.guardarCliente=function(){
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
