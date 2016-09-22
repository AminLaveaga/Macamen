package com.macamenApp.macamen.controller;

import java.util.ArrayList;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.macamenApp.macamen.entidad.Citas;
import com.macamenApp.macamen.entidad.Cliente;
import com.macamenApp.macamen.negocio.CitasNegocio;

@RestController
@RequestMapping(value="/citas")
public class CitasController {
	
	@Autowired
	CitasNegocio citaNegocio;
	
	//Lista Citas
	@RequestMapping(method=RequestMethod.GET, value="/buscar")
	public ArrayList<Citas> buscar(){
		
		
		return citaNegocio.ListarCitas();
	}
	
	//Buscar Cita
	@RequestMapping(method=RequestMethod.GET , value="/buscar/id/{idCita}")
	public ResponseEntity<?> buscar(@PathVariable Long idCita){
		
		Citas c=citaNegocio.buscar(idCita);
		return new ResponseEntity(c,HttpStatus.OK);
	}
	
	//Guardar Cita
	@RequestMapping(method=RequestMethod.POST)
	public ResponseEntity<?> guardar(@RequestBody Citas cita){
		
		citaNegocio.guardar(cita);
		
		return new ResponseEntity(HttpStatus.ACCEPTED);
		
	}
	
	//Modificar Cita
	@RequestMapping(method=RequestMethod.PUT)
	public ResponseEntity <?> modificar(@RequestBody Citas cita){
		
		citaNegocio.modificar(cita);
		
		return new ResponseEntity(HttpStatus.ACCEPTED);
		
	}
	
	//Eliminar cita
	@RequestMapping(method=RequestMethod.DELETE,value="/eliminar/id/{idCita}")
	public ResponseEntity<?> eliminar(@PathVariable Long idCita){
		
		citaNegocio.Eliminar(idCita);
		return new ResponseEntity(HttpStatus.ACCEPTED);
	}
	
	//Citas Por Fecha
	@RequestMapping(method=RequestMethod.GET, value="/{fecha}")
	public ArrayList<Citas> citasPorFecha(@PathVariable @DateTimeFormat(pattern="yyyy-MM-dd") Date fecha){
		
		return citaNegocio.citasPorFecha(fecha);
	}
	
	
	
	
	
	
	
	
	
	
}