'use strict';

angular.module('macamenApp')
  .service('servicioService',['$http',function($http){

  this.consultarServicios = function(){
    return $http({method:'GET',url:'http://localhost:8080/servicio/buscar'});
  };

  this.consultarServicio=function(id){
    return $http({method:'GET',url:'http://localhost:8080/servicio/buscar/id/'+id})
  };

  this.guardarServicio=function(servicio){
       return $http({method:'POST',url:'http://localhost:8080/servicio',data:servicio});
  };

  this.eliminarServicio=function(id){

        return $http({method:'DELETE',url:'http://localhost:8080/servicio/eliminar/id/'+id});

  };
  this.modificarServicio=function(servicio){

        return $http({method:'PUT',url:'http://localhost:8080/servicio',data:servicio});

  };

}]);
