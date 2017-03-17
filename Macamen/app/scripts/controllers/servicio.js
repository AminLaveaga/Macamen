'use strict';

angular.module('macamenApp').controller('servicioCtrl',['$scope','servicioService','$uibModal','validacionService','inform',function($scope,servicioService,$uibModal,validacionService,inform){

document.getElementById("menu").style.visibility="visible";

   $scope.servicio={id:'',
                    nombre:'',
                     descripcion:''
                    };

    $scope.listaServicios= [];

   // $scope.servicioBusqueda={};

   $scope.obtenerServicios=function(){
            servicioService.consultarServicios().then(function(result){

              $scope.listaServicios=result.data;

            },function(error){


            });
    };
   /* $scope.obtenerServicio=function(id){
        servicioService.consultarServicio(id).then(function(result){
              $scope.servicioBusqueda=result.data;
        },function(error){
              alert('');
        });
    };*/

     $scope.guardar=function(frmServicio){


       if(frmServicio.$valid){
           servicioService.guardarServicio($scope.servicio).then(function(result){
                          $scope.obtenerServicios();
                          $scope.servicio={
                                            id:'',
                                            nombre:'',
                                            descripcion:''
                                          };
                    },function(error){

                    });
           validacionService.clearErrors(frmServicio);

       }else{
            validacionService.showErrors(frmServicio);
            inform.add('Existen campos que son requeridos para registrar servicio',{ttl:4000, type:'warning'}
            )};



     };

     $scope.eliminarServicio=function(id){
              servicioService.eliminarServicio(id).then(
                  function(result){
                      $scope.obtenerServicios();
                  },
                  function(error){
                  }
              );
     };

   $scope.modificarServicio=function(id){

           // $scope.obtenerServicio(id);

          var modalInstance=$uibModal.open({
              templateUrl:'views/modificarServicio.html',
              controller:'modificarServicioCtrl',
              scope:$scope,
              resolve:{
                obj:function(){
                    return{idServicio:id}
                }
              }

          })


    };


    $scope.obtenerServicios();

}]);
