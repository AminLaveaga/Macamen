angular.module('macamenApp')
  .service('citasService',['$http',function($http){

    this.guardarCita= function(cita){

           return $http({method:'POST',url:'http://localhost:8080/citas',data:cita});
    };

    this.consultarCitas=function(){

       return $http({method:'GET',url:'http://localhost:8080/citas/buscar'});
    };

    this.consultarCita=function(id){

        return $http({method:'GET',url:'http://localhost:8080/citas/buscar/id/'+id});
    };

}]);
