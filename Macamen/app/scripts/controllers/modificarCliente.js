angular.module('macamenApp').controller('modificarClienteCtrl',['$scope','$uibModalInstance','clienteService','obj','$controller',function($scope,$uibModalInstance,clienteService,obj,$controller){

    $.extend(this,$controller('clienteCtrl',{$scope:$scope}));

    $scope.cliente={};

    $scope.obtenerCliente=function(id){

        clienteService.consultarCliente(id).then(function(result){
                $scope.cliente=result.data;

        },function(error){});

    }

    $scope.obtenerCliente(obj.idCliente);


    $scope.cerrarVentana=function(){
        $uibModalInstance.close();
    };

  $scope.modificarCliente=function(){
      clienteService.modificarCliente($scope.cliente).then(function(resul){
          $scope.$parent.obtenerClientes();
          $scope.cerrarVentana();
      },function(error){})
  }

}]);
