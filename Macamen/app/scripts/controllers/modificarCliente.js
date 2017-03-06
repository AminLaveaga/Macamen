angular.module('macamenApp').controller('modificarClienteCtrl',['$scope','$uibModalInstance','clienteService','obj','$controller',function($scope,$uibModalInstance,clienteService,obj,$controller){

    $.extend(this,$controller('clienteCtrl',{$scope:$scope}));

    $scope.cliente={
                        id:'',
                        nombre:'',
                        direccion:'',
                        telefono:'',
                        ocupacion:'',
                        fNacimiento:''};

    $scope.obtenerCliente=function(id){

        clienteService.consultarCliente(id).then(function(result){
                $scope.cliente.id=result.data.id;
                $scope.cliente.nombre=result.data.nombre;
                $scope.cliente.telefono=result.data.telefono;
                $scope.cliente.direccion=result.data.direccion;
                $scope.cliente.ocupacion=result.data.ocupacion;
                $scope.cliente.fNacimiento=new Date(""+result.data.fNacimiento);

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
