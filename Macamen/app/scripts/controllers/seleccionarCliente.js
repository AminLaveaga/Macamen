angular.module('macamenApp').controller('seleccionarClienteCtrl',['$scope','$uibModalInstance','$controller','clienteService',function($scope,$uibModalInstance,$controller,clienteService){

$.extend(this,$controller('citasCtrl',{$scope:$scope}));

$scope.cliente={
                    id:'',
                    nombre:'',
                    direccion:'',
                    telefono:'',
                    ocupacion:'',
                    fNacimiento:''
                    };

 $scope.listaClientes=[          ];

$scope.obtenerClientes=function(){

    clienteService.consultarClientes().then(function(result){
        $scope.listaClientes=result.data;
    },function(error){});
};
 $scope.clienteElegido=function(cliente){
        $scope.$parent.cliente=cliente;
        $uibModalInstance.close();
 };

$scope.obtenerClientes();


}]);
