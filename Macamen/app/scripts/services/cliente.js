angular.module('macamenApp').service('clienteService',['$http',function($http){

  this.consultarClientes = function(){
      return $http({method:'GET',url:'http://localhost:8080/cliente/buscar'});
  };

  this.consultarCliente = function(id){
    return $http({method:'GET', url:'http://localhost:8080/cliente/buscar/id/'+id});
  };

  this.guardarCliente = function(cliente){
    return $http({method:'POST',url:'http://localhost:8080/cliente',data:cliente});
  };

  this.eliminarCliente = function(id){
    return $http({method:'DELETE',url:'http://localhost:8080/cliente/eliminar/id/'+id});
  };
  this.modificarCliente = function(cliente){
    return $http({method:'PUT',url:'http://localhost:8080/cliente',data:cliente});

  };

}]);
