package com.macamenApp.macamen.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.macamenApp.macamen.entidad.Empleado;
import com.macamenApp.macamen.negocio.EmpleadoNegocio;

@RestController
@RequestMapping(value="/empleado")
public class EmpleadoContoller {
	
	@Autowired
	EmpleadoNegocio empleadoNegocio;
	
	@RequestMapping(method=RequestMethod.GET, value="/buscar")
	public ArrayList<?> buscar(){
		
		return empleadoNegocio.listarEmpleado();
	}
	
	
	@RequestMapping(method=RequestMethod.GET,value="/buscar/id/{idEmpleado}")
	public ResponseEntity<?> buscar(@PathVariable Long idEmpleado){
		Empleado e=empleadoNegocio.buscar(idEmpleado);
		
		return new ResponseEntity(e,HttpStatus.OK);	
	}
	

	@RequestMapping(method=RequestMethod.POST)
	public ResponseEntity<?> guardar(@RequestBody Empleado empleado){
		
		empleadoNegocio.guardar(empleado);
		 return new ResponseEntity(HttpStatus.ACCEPTED);
		
	}
	
	
	@RequestMapping(method=RequestMethod.PUT)
	public ResponseEntity<?> modificar(@RequestBody Empleado empleado){
		
		empleadoNegocio.modificar(empleado);
		return new ResponseEntity(HttpStatus.ACCEPTED);
	}
	
	@SuppressWarnings("rawtypes")
	@RequestMapping(method=RequestMethod.DELETE, value="eliminar/id/{idEmpleado}")
	public ResponseEntity<?> eliminar(@PathVariable Long idEmpleado){
		  
		empleadoNegocio.eliminar(idEmpleado);
		return new ResponseEntity(HttpStatus.OK);
	}
}
