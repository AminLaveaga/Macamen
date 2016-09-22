"use strict";angular.module("macamenApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","ui.bootstrap"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/login.html",controller:"loginCtrl"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).when("/citas",{templateUrl:"views/citas.html"}).when("/empleado",{templateUrl:"views/empleado.html"}).when("/cliente",{templateUrl:"views/cliente.html",controller:"clienteCtrl"}).when("/servicio",{templateUrl:"views/servicio.html",controller:"servicioCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("macamenApp").controller("MainCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("macamenApp").controller("loginCtrl",["$scope","$location",function(a,b){a.cambiarRuta=function(){b.path("/citas")}}]),angular.module("macamenApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("macamenApp").controller("servicioCtrl",["$scope","servicioService","$uibModal",function(a,b,c){a.servicio={id:"",nombre:"",descripcion:""},a.listaServicios=[],a.obtenerServicios=function(){b.consultarServicios().then(function(b){a.listaServicios=b.data},function(a){})},a.guardar=function(){b.guardarServicio(a.servicio).then(function(b){a.obtenerServicios(),a.servicio={id:"",nombre:"",descripcion:""}},function(a){})},a.eliminarServicio=function(c){b.eliminarServicio(c).then(function(b){a.obtenerServicios()},function(a){})},a.modificarServicio=function(b){c.open({templateUrl:"views/modificarServicio.html",controller:"modificarServicioCtrl",scope:a,resolve:{obj:function(){return{idServicio:b}}}})},a.obtenerServicios()}]),angular.module("macamenApp").controller("modificarServicioCtrl",["$scope","$uibModalInstance","servicioService","obj","$controller",function(a,b,c,d,e){$.extend(this,e("servicioCtrl",{$scope:a})),a.servicio={},a.obtenerServicio=function(b){c.consultarServicio(b).then(function(b){a.servicio=b.data},function(a){alert("")})},a.obtenerServicio(d.idServicio),a.cerrarVentana=function(){b.close()},a.modificarServicio=function(){c.modificarServicio(a.servicio).then(function(b){a.$parent.obtenerServicios(),a.cerrarVentana()},function(a){})}}]),angular.module("macamenApp").controller("clienteCtrl",["$scope","clienteService","$uibModal",function(a,b,c){a.cliente={id:"",nombre:"",direccion:"",telefono:"",ocupacion:"",fNacimiento:""},a.listaClientes=[],a.obtenerClientes=function(){b.consultarClientes().then(function(b){a.listaClientes=b.data},function(a){})},a.guardarCliente=function(){b.guardarCliente(a.cliente).then(function(b){a.obtenerClientes(),a.cliente={id:"",nombre:"",direccion:"",telefono:"",ocupacion:"",fNacimiento:""}},function(a){})},a.eliminarCliente=function(c){b.eliminarCliente(c).then(function(b){a.obtenerClientes()},function(a){})},a.modificarCliente=function(b){c.open({templateUrl:"views/modificarCliente.html",controller:"modificarClienteCtrl",scope:a,resolve:{obj:function(){return{idCliente:b}}}})},a.obtenerClientes()}]),angular.module("macamenApp").controller("modificarClienteCtrl",["$scope","$uibModalInstance","clienteService","obj","$controller",function(a,b,c,d,e){$.extend(this,e("clienteCtrl",{$scope:a})),a.cliente={},a.obtenerCliente=function(b){c.consultarCliente(b).then(function(b){a.cliente=b.data},function(a){})},alert("jjj"+d.idCliente),a.obtenerCliente(d.idCliente),a.cerrarVentana=function(){b.close()},a.modificarCliente=function(){c.modificarCliente(a.cliente).then(function(b){a.$parent.obtenerClientes(),a.cerrarVentana()},function(a){})}}]),angular.module("macamenApp").service("servicioService",["$http",function(a){this.consultarServicios=function(){return a({method:"GET",url:"http://localhost:8080/servicio/buscar"})},this.consultarServicio=function(b){return a({method:"GET",url:"http://localhost:8080/servicio/buscar/id/"+b})},this.guardarServicio=function(b){return a({method:"POST",url:"http://localhost:8080/servicio",data:b})},this.eliminarServicio=function(b){return a({method:"DELETE",url:"http://localhost:8080/servicio/eliminar/id/"+b})},this.modificarServicio=function(b){return a({method:"PUT",url:"http://localhost:8080/servicio",data:b})}}]),angular.module("macamenApp").service("clienteService",["$http",function(a){this.consultarClientes=function(){return a({method:"GET",url:"http://localhost:8080/cliente/buscar"})},this.consultarCliente=function(b){return a({method:"GET",url:"http://localhost:8080/cliente/buscar/id/"+b})},this.guardarCliente=function(b){return a({method:"POST",url:"http://localhost:8080/cliente",data:b})},this.eliminarCliente=function(b){return a({method:"DELETE",url:"http://localhost:8080/cliente/eliminar/id/"+b})},this.modificarCliente=function(b){return a({method:"PUT",url:"http://localhost:8080/cliente",data:b})}}]),angular.module("macamenApp").run(["$templateCache",function(a){a.put("views/about.html","<p>This is the about view.</p>"),a.put("views/citas.html",'<div class="container" align="left"> <h3>Citas</h3> <form role="form"> <div class="form-group"> <label for="id">Id:</label> <input type="text" class="form-control" style="width:300px;height:30px" id="id"> <label for="nombre">Nombre:</label> <input type="text" class="form-control" style="width:300px;height:30px" id="nombre"> <label for="fecha">Fecha:</label> <input type="text" class="form-control" style="width:300px;height:30px" id="fecha"> <label for="hora">Hora:</label> <input type="text" class="form-control" style="width:300px;height:30px" id="hora"> <label for="serv">Servicios:</label> <input type="text" class="form-control" style="width:300px;height:30px" id="serv"> <label for="nombreC">Nombre cliente:</label> <input type="text" class="form-control" style="width:300px;height:30px" id="nombreC"> <label for="nombrec">Nombre empleado:</label> <input type="text" class="form-control" style="width:300px;height:30px" id="nombreE"> <br> <button type="submit" class="form-control" style="width:100px;height:30px"><span class="glyphicon glyphicon-plus-sign"></span> Guardar</button> </div> </form> </div>'),a.put("views/cliente.html",'<div class="container" align="left"> <h3>Cliente</h3> <div class="row"> <div class="col-sm-6"> <form role="form" role="form" ng-submit="guardarCliente()"> <label for="id">Id:</label> <input type="text" disabled ng-model="cliente.id" class="form-control" style="width:300px;height:30px" id="id"> <label for="nombre">Nombre:</label> <input type="text" ng-model="cliente.nombre" class="form-control" style="width:300px;height:30px" id="nombre"> <label for="dir">Direccion:</label> <input type="text" ng-model="cliente.direccion" class="form-control" style="width:300px;height:30px" id="dir"> <label for="tel">Telefono:</label> <input type="text" ng-model="cliente.telefono" class="form-control" style="width:300px;height:30px" id="tel"> <label for="fn">Fecha nacimiento:</label> <input type="text" ng-model="cliente.fNacimiento" class="form-control" style="width:300px;height:30px" id="fn"> <label for="ocu">Ocupacion:</label> <input type="text" ng-model="cliente.ocupacion" class="form-control" style="width:300px;height:30px" id="ocu"> <br> <button type="submit" class="form-control" style="width:100px;height:30px"><span class="glyphicon glyphicon-plus-sign"></span>Guardar</button> </form> </div> <div class="col-sm-6"> <table class="table table-striped"> <thead> <th>Id</th> <th>Nombre</th> <th>Telefono</th> <th></th> <th></th> </thead> <tbody> <tr ng-repeat="datoCliente in listaClientes track by datoCliente.id"> <td ng-bind="datoCliente.id"></td> <td ng-bind="datoCliente.nombre"></td> <td ng-bind="datoCliente.telefono"></td> <td><div data-toggle="tooltip" title="Eliminar!" ng-click="eliminarCliente(datoCliente.id)" class="badge"><span class="glyphicon glyphicon-trash"></span></div></td> <td><div data-toggle="tooltip" title="Modificar!" ng-click="modificarCliente(datoCliente.id)" class="badge"><span class="glyphicon glyphicon-edit"></span></div></td> </tr> </tbody> </table> </div> </div> </div>'),a.put("views/empleado.html",'<div class="container" align="left"> <h3>Empleados</h3> <form role="form" role="form"> <div class="form-group"> <label for="id">Id:</label> <input type="text" class="form-control" style="width:300px;height:30px" id="id"> <label for="nombre">Nombre:</label> <input type="text" class="form-control" style="width:300px;height:30px" id="nombre"> <label for="dir">Direccion:</label> <input type="text" class="form-control" style="width:300px;height:30px" id="dir"> <label for="tel">Telefono:</label> <input type="text" class="form-control" style="width:300px;height:30px" id="tel"> <label for="fn">Fecha nacimiento:</label> <input type="text" class="form-control" style="width:300px;height:30px" id="fn"> <label for="ocu">Ocupacion:</label> <input type="text" class="form-control" style="width:300px;height:30px" id="ocu"> <br> <button type="submit" class="form-control" style="width:100px;height:30px">Guardar</button> </div> </form> </div>'),a.put("views/login.html",'<div class="container"> <h3>Login</h3> <br> <form class="form-horizontal" ng-submit="cambiarRuta()" role="form"> <div class="form-group"> <label class="control-label col-sm-2" for="usuario">Usuario:</label> <div class="col-sm-10"> <input type="text" class="form-control" id="usuario" placeholder="Escriba su usuario"> </div> </div> <div class="form-group"> <label class="control-label col-sm-2" for="contraseña">Password:</label> <div class="col-sm-10"> <input type="password" class="form-control" id="contraseña" placeholder="Escriba su contraseña"> </div> </div> <div class="form-group"> <div class="col-sm-offset-2 col-sm-10"> <button type="submit" class="btn btn-default">Entrar</button> </div> </div> </form> </div>'),a.put("views/main.html",'<div class="jumbotron"> <h1>\'Allo, \'Allo!</h1> <p class="lead"> <img src="images/yeoman.c582c4d1.png" alt="I\'m Yeoman"><br> Always a pleasure scaffolding your apps. </p> <p><a class="btn btn-lg btn-success" ng-href="#/">Splendid!<span class="glyphicon glyphicon-ok"></span></a></p> </div> <div class="row marketing"> <h4>HTML5 Boilerplate</h4> <p> HTML5 Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites. </p> <h4>Angular</h4> <p> AngularJS is a toolset for building the framework most suited to your application development. </p> <h4>Karma</h4> <p>Spectacular Test Runner for JavaScript.</p> </div>'),a.put("views/modificarCliente.html",'<div class="panel panel-default"> <div class="panel-heading"><h4>Modificar Cliente</h4></div> <div class="panel-body"> <form role="form" role="form" ng-submit="modificarCliente()"> <div class="form-group row"> <div class="col-sm-8"> <label for="id">Id:</label> <input type="text" disabled ng-model="cliente.id" class="form-control" style="width:300px;height:30px" id="id"> <label for="nombre">Nombre:</label> <input type="text" ng-model="cliente.nombre" class="form-control" style="width:300px;height:30px" id="nombre"> <label for="dir">Direccion:</label> <input type="text" ng-model="cliente.direccion" class="form-control" style="width:300px;height:30px" id="dir"> <label for="tel">Telefono:</label> <input type="text" ng-model="cliente.telefono" class="form-control" style="width:300px;height:30px" id="tel"> <label for="fn">Fecha nacimiento:</label> <input type="text" ng-model="cliente.fNacimiento" class="form-control" style="width:300px;height:30px" id="fn"> <label for="ocu">Ocupacion:</label> <input type="text" ng-model="cliente.ocupacion" class="form-control" style="width:300px;height:30px" id="ocu"> </div> <div class="row"> <div class="col-sm-3"> <button type="submit" class="btn btn-Default"><span class="glyphicon glyphicon-plus-sign"></span> Modificar</button> </div> <div class="col-sm-3"> <div class="btn btn-default" ng-click="cerrarVentana()"><span class="glyphicon glyphicon-remove"></span>Cancelar</div> </div> </div> </div> </form> </div> </div>'),a.put("views/modificarServicio.html",'<div class="panel panel-default"> <div class="panel-heading"><h4>Modificar servicio</h4></div> <div class="panel-body"> <form role="form" role="form" ng-submit="modificarServicio()"> <div class="form-group row"> <div class="col-sm-8"> <label for="id">Id:</label> <input type="text" ng-model="servicio.id" disabled class="form-control" id="id"> <label for="nombre">Nombre:</label> <input type="text" ng-model="servicio.nombre" required class="form-control" id="nombre"> <label for="des">Descripcion:</label> <input type="text" ng-model="servicio.descripcion" class="form-control" id="des"> </div> </div> <div class="row"> <div class="col-sm-3"> <button type="submit" class="btn btn-default"><span class="glyphicon glyphicon-plus-sign"></span> Modificar</button> </div> <div class="col-sm-3"> <div class="btn btn-default" ng-click="cerrarVentana()"><span class="glyphicon glyphicon-remove"></span> Cancelar</div> </div> </div> </form> </div> </div>'),a.put("views/servicio.html",'<div class="container" align="left"> <h3>Servicios</h3> <div class="row"> <div class="col-sm-6"> <form role="form" role="form" ng-submit="guardar()"> <div class="form-group"> <label for="id">Id:</label> <input type="text" ng-model="servicio.id" disabled class="form-control" style="width:300px;height:30px" id="id"> <label for="nombre">Nombre:</label> <input type="text" ng-model="servicio.nombre" class="form-control" style="width:300px;height:30px" id="nombre"> <label for="des">Descripcion:</label> <input type="text" ng-model="servicio.descripcion" class="form-control" style="width:300px;height:30px" id="des"> <br> <button type="submit" class="form-control" style="width:100px;height:30px"><span class="glyphicon glyphicon-plus-sign"></span> Guardar</button> </div> </form> </div> <div class="col-sm-6"> <table class="table table-striped"> <thead> <th>id</th> <th>Nombre</th> <th>Descripcion</th> <th></th> <th></th> </thead> <tbody> <tr ng-repeat="datoServicio in listaServicios track by datoServicio.id"> <td ng-bind="datoServicio.id"></td> <td ng-bind="datoServicio.nombre"></td> <td ng-bind="datoServicio.descripcion"></td> <td><div data-toggle="tooltip" title="Eliminar!" ng-click="eliminarServicio(datoServicio.id)" class="badge"><span class="glyphicon glyphicon-trash"></span></div></td> <td><div data-toggle="tooltip" title="Modificar" ng-click="modificarServicio(datoServicio.id)" class="badge"><span class="glyphicon glyphicon-edit"></span></div></td> </tr> </tbody> </table> </div> </div> </div>')}]);