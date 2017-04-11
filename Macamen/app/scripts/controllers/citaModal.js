angular.module('macamenApp').controller('citaModalCtrl',['$scope','servicioService','empleadoService','citasService','obj','$uibModal',function($scope,servicioService,empleadoService,citasService,obj,$uibModal){

    $scope.cita={};




///////////////////////////////////////////////////////////////////////////////////////////////////////

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

  $scope.extraSettings={displayProp:'id',
                       showCheckAll:false,
                        showUncheckAll:false,
                        externalIdProp: '',

                        };
  $scope.traduccion={buttonDefaultText:'Seleccionar Servicios',
                     dynamicButtonTextSuffix:'Servicios Seleccionados'
  };

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

 $scope.servi=[];
      $scope.emple=[];
      $scope.citaMod;


$scope.recorrer=function(){



    for(var i=0;i<$scope.serviciosElegidos.length;i++){
            var a={"id":$scope.serviciosElegidos[i].id };
            var b={"id":$scope.empleadosElegidos[i].id };
            $scope.servi.push(a);
            $scope.emple.push(b);
    };
  var hora= new Date('1995-12-17T'+$scope.horaSeleccionada.hora+'.000Z');
    $scope.citaMod={
                    "hora":hora,
                  "fecha":$scope.fechaSeleccionada,
                   "cliente":{"id":$scope.cliente.id},
                     "empleado":$scope.emple,
                   "servicio":$scope.servi



  };

    citasService.guardarCita($scope.citaMod).then(function(resul){},function(error){});

    $scope.vaciarSeleccion();
};


$scope.citaConsulta=function(idCita){

                   citasService.consultarCita(idCita).then(function(result){
                                          $scope.cita=result.data;

                    $scope.fechaSeleccionada=new Date(''+$scope.cita.fecha+'T07:00:00.000Z');

                                  for(var h=0;h<$scope.horas.length;h++){
                                         if($scope.cita.hora==$scope.horas[h].real){
                                                  $scope.horaSeleccionada.hora=$scope.horas[h].valor;
                                                                                                                            break;
                                                   };
                                     };

                                  $scope.cliente=$scope.cita.cliente;

                                 // $scope.serviciosElegidos=$scope.cita.servicio;
                                  //$scope.empleadosElegidos=$scope.cita.empleado;

                                  for(var p=0;p<$scope.cita.servicioCliente.length;p++){
                                        /*  for(var h=0;h<$scope.servicios.length;h++){
                                                if($scope.servicios[h].id==$scope.cita.servicioCliente[p].servicio.id){
                                                          $scope.servicios[h].ticked=true;
                                                };
                                          };*/
                                      $scope.serviciosElegidos.push($scope.cita.servicioCliente[p].servicio)
                                      $scope.empleadosElegidos.push($scope.cita.servicioCliente[p].empleado);
                                       };



                                  },function(error){});
///

        };




  $scope.citaConsulta(obj.idCita);
  $scope.listarEmpleados();
  $scope.listarServicios();





////////////////////////////////////////////////////////////////////////////////////////////////////////
}]);
