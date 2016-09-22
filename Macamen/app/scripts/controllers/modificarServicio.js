angular.module('macamenApp').controller('modificarServicioCtrl',['$scope','$uibModalInstance','servicioService','obj','$controller',function($scope,$uibModalInstance,servicioService,obj,$controller){

          $.extend(this,$controller('servicioCtrl',{$scope:$scope}));
          $scope.servicio={};

          $scope.obtenerServicio=function(id){
                  servicioService.consultarServicio(id).then(function(result){
                        $scope.servicio=result.data;
                  },function(error){
                        alert('');
                  });
              };

          $scope.obtenerServicio(obj.idServicio);

          $scope.cerrarVentana=function(){

              $uibModalInstance.close();
          };

          $scope.modificarServicio=function(){
               servicioService.modificarServicio($scope.servicio).then(
                  function(result){
                    $scope.$parent.obtenerServicios();
                    $scope.cerrarVentana();

                  },
                  function(error){
                  }
                );

          };

}]);
