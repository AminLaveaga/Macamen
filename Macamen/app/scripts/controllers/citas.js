angular.module('macamenApp').controller('citasCtrl',['$uibModal','$scope','servicioService','empleadoService','citasService',function($uibModal,$scope,servicioService,empleadoService,citasService){

  $scope.horas=[
              {hora:'09:00 a.m',valor:'16:00:00'},
              {hora:'09:30 a.m',valor:'16:30:00'},
              {hora:'10:00 a.m',valor:'17:00:00'},
              {hora:'10:30 a.m',valor:'17:30:00'},
              {hora:'11:00 a.m',valor:'18:00:00'},
              {hora:'11:30 a.m',valor:'18:30:00'},
              {hora:'12:00 p.m',valor:'19:00:00'},
              {hora:'12:30 p.m',valor:'19:30:00'},
              {hora:'01:00 p.m',valor:'20:00:00'},
              {hora:'01:30 p.m',valor:'20:30:00'},
              {hora:'02:00 p.m',valor:'21:00:00'},
              {hora:'02:30 p.m',valor:'21:30:00'},
              {hora:'03:00 p.m',valor:'22:00:00'},
              {hora:'03:30 p.m',valor:'22:30:00'},
              {hora:'04:00 p.m',valor:'23:30:00'},
              {hora:'04:30 p.m',valor:'23:30:00'},
              {hora:'05:00 p.m',valor:'00:00:00'},
              {hora:'05:30 p.m',valor:'00:30:00'},
              {hora:'06:00 p.m',valor:'01:00:00'},
              {hora:'06:30 p.m',valor:'01:30:00'},
              {hora:'07:00 p.m',valor:'02:00:00'},
  ];



  $scope.horaSeleccionada={"hora":{}};
  $scope.fechaSeleccionada;

  $scope.cliente={
                      id:'',
                      nombre:'',
                      direccion:'',
                      telefono:'',
                      ocupacion:'',
                      fNacimiento:''
                      };

  $scope.servicios=[];

  $scope.hour;

  $scope.serviciosElegidos=[];

  $scope.localLang={
            selectAll:"Todos",
            selectNone:"Ninguno",
            reset:"Reset",
            search:"Buscar..",
            nothingSelected:"Sin seleccionar"
  };



  $scope.empleados=[];

  $scope.empleadosElegidos=[];

  $scope.vaciarSeleccion=function(){
    $scope.serviciosElegidos=[];
    $scope.empleadosElegidos=[];
    $scope.horaSeleccionada={"hora":{}};
    $scope.fechaSeleccionada;
    $scope.cliente={
                          id:'',
                          nombre:'',
                          direccion:'',
                          telefono:'',
                          ocupacion:'',
                          fNacimiento:''
                          };
          $scope.servi=[];
          $scope.emple=[];
          $scope.cita;

        location.reload();
  };


  $scope.seleccionarCliente=function(){

      var modalInstance=$uibModal.open({
                templateUrl:'views/seleccionarCliente.html',
                controller:'seleccionarClienteCtrl',
                scope:$scope,
                resolve:{}
      });
  };

  $scope.listarServicios=function(){
        servicioService.consultarServicios().then(function(result){

        $scope.servicios=result.data;

        },function(error){});
  };

  $scope.listarEmpleados=function(){
          empleadoService.consultarEmpleados().then(function(result){
              $scope.empleados=result.data;
          },function(error){});

  };

$scope.servicioEmpleado=[];
      $scope.cita;


$scope.recorrer=function(){


      console.log(""+$scope.fechaSeleccionada);
    for(var i=0;i<$scope.serviciosElegidos.length;i++){
           var a={"empleado":{"id":$scope.empleadosElegidos[i].id},"servicio":{"id":$scope.serviciosElegidos[i].id}};

                       $scope.servicioEmpleado.push(a);
    };
    console.log($scope.servicioEmpleado+"");

  var hora= new Date('1995-12-17T'+$scope.horaSeleccionada.hora+'.000Z');
    $scope.cita={
                    "hora":hora,
                  "fecha":$scope.fechaSeleccionada,
                   "cliente":{"id":$scope.cliente.id},
                     "servicioCliente":$scope.servicioEmpleado



  };

    citasService.guardarCita($scope.cita).then(function(resul){},function(error){});

    $scope.vaciarSeleccion();
};



  $scope.listarEmpleados();
  $scope.listarServicios();


}]);
