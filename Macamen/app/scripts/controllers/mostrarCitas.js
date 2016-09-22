angular.module('macamenApp').controller('mostrarCitasCtrl',['$scope','$controller','empleadoService','citasService','$uibModal',function($scope,$controller,empleadoService,citasService,$uibModal){

$.extend(this,$controller('citasCtrl',{$scope:$scope}));

$scope.horas=[
                          {hora:'09:00 a.m',real:'09:00:00',valor:'16:00:00'},
                          {hora:'09:30 a.m',real:'09:30:00',valor:'16:30:00'},
                          {hora:'10:00 a.m',real:'10:00:00',valor:'17:00:00'},
                          {hora:'10:30 a.m',real:'10:30:00',valor:'17:30:00'},
                          {hora:'11:00 a.m',real:'11:00:00',valor:'18:00:00'},
                          {hora:'11:30 a.m',real:'11:30:00',valor:'18:30:00'},
                          {hora:'12:00 p.m',real:'12:00:00',valor:'19:00:00'},
                          {hora:'12:30 p.m',real:'12:30:00',valor:'19:30:00'},
                          {hora:'01:00 p.m',real:'13:00:00',valor:'20:00:00'},
                          {hora:'01:30 p.m',real:'13:30:00',valor:'20:30:00'},
                          {hora:'02:00 p.m',real:'14:00:00',valor:'21:00:00'},
                          {hora:'02:30 p.m',real:'14:30:00',valor:'21:30:00'},
                          {hora:'03:00 p.m',real:'15:00:00',valor:'22:00:00'},
                          {hora:'03:30 p.m',real:'15:30:00',valor:'22:30:00'},
                          {hora:'04:00 p.m',real:'16:00:00',valor:'23:30:00'},
                          {hora:'04:30 p.m',real:'16:30:00',valor:'23:30:00'},
                          {hora:'05:00 p.m',real:'17:00:00',valor:'00:00:00'},
                          {hora:'05:30 p.m',real:'17:30:00',valor:'00:30:00'},
                          {hora:'06:00 p.m',real:'18:00:00',valor:'01:00:00'},
                          {hora:'06:30 p.m',real:'18:30:00',valor:'01:30:00'},
                          {hora:'07:00 p.m',real:'19:00:00',valor:'02:00:00'},

               ];
$scope.empleados=[];

$scope.obtener=function(){

      empleadoService.consultarEmpleados().then(function(resul){

      },function(error){});
};

$scope.citass=[];

$scope.cambiar=function(){

    citasService.consultarCitas().then(function(result){
          $scope.citass=result.data;

         console.log($scope.citass[0].id);
    },function(error){});


};

$scope.$watchCollection('citass', function(newValue, oldValue) {
            if($scope.citass.length != 0 ){

                      for(var i=0;i<$scope.citass.length;i++){

                            var empleados=[];
                                  for(var e=0;e<$scope.citass[i].empleado.length;e++){
                                       var b=0;
                                          if(empleados.length != 0){
                                                for(var h=0;h<empleados.length;h++){
                                                      if(empleados[h].id != $scope.citass[i].empleado[e].id){ b=1;};
                                                };
                                           if(b == 1){empleados.push($scope.citass[i].empleado[e])};
                                          }else{empleados.push($scope.citass[i].empleado[e]);};
                                  };
                                   for(var j=0;j<empleados.length;j++){
                                                      for(var k=0;k<$scope.horas.length;k++){


                                                                 if($scope.citass[i].hora===$scope.horas[k].real){

                                                                             var span = document.createElement("span");
                                                                             var texto=document.createTextNode("Cliente: "+$scope.citass[i].cliente.nombre);
                                                                             span.className="label label-primary label-as-badge";
                                                                             span.id=$scope.citass[i].id;


                                                                             span.addEventListener("click",function(e){
                                                                                                                        //var idC=id;
                                                                                                                       mostrarCitaModal(e.target.id)

                                                                                                                       });



                                                                             span.appendChild(texto);

                                                                             var cell= document.getElementById(""+$scope.horas[k].hora + empleados[j].nombre);
                                                                             cell.appendChild(span);



                                                                                                                 };


                                                       };

                                                   };
                      };
              }
             });

var mostrarCitaModal=function(a){

      var modalInstance = $uibModal.open({
                  templateUrl:'views/mostrarCitaModal.html',
                  controller:'citaModalCtrl',
                  scope:$scope,
                  resolve:{
                      obj:function(){return{
                                              idCita:a
                                         }}
                  }
      });
      };
$scope.obtener();


}]);
