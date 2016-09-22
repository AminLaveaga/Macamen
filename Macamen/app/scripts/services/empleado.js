angular.module("macamenApp").service('empleadoService',['$http',function($http){

  this.consultarEmpleados=function(){
      return $http({method:'GET',url:'http://localhost:8080/empleado/buscar'});
  };

  this.consultarEmpleado=function(id){
      return $http({method:'GET',url:'http://localhost:8080/empleado/buscar/id/'+id});
  };

  this.guardarEmpleado=function(empleado){
      return $http({method:'POST',url:'http://localhost:8080/empleado',data:empleado});
  };

  this.eliminarEmpleado=function(id){
    return $http({method:'DELETE',url:'http://localhost:8080/empleado/eliminar/id/'+id});
  };

  this.modificarEmpleado=function(empleado){
      return $http({method:'PUT',url:'http://localhost:8080/empleado',data:empleado});
  };

}])
