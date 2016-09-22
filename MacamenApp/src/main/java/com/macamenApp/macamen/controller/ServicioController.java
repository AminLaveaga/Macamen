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

import com.macamenApp.macamen.entidad.Servicio;
import com.macamenApp.macamen.negocio.ServicioNegocio;


@RestController
@RequestMapping(value="/servicio")
public class ServicioController {
	@Autowired
	ServicioNegocio servicioNegocio;
	// Lista Servicios
	@RequestMapping(method=RequestMethod.GET,value="/buscar")
	public ArrayList<Servicio> buscar(){
		
		return servicioNegocio.listarServicios();
	}
	// Buscar servicio
	@SuppressWarnings({ "unchecked", "rawtypes" })
	@RequestMapping(method=RequestMethod.GET, value="/buscar/id/{idServicio}")
	public ResponseEntity<Servicio> buscar(@PathVariable Long idServicio){
		Servicio s=servicioNegocio.buscarServicio(idServicio);
		
		if(s==null)
			return new ResponseEntity(HttpStatus.NOT_FOUND);
		else
			return new ResponseEntity(s,HttpStatus.OK);
	}
	
	//Guardar Servicio
	@SuppressWarnings("rawtypes")
	@RequestMapping(method=RequestMethod.POST)
	public ResponseEntity<?> guardar(@RequestBody Servicio servicio){
		
		if(servicio.getNombre()!=""&& servicio.getDescripcion()!=""){
			servicioNegocio.guardar(servicio);
			return new ResponseEntity(HttpStatus.ACCEPTED);
		}else{
			
			return new ResponseEntity(HttpStatus.CONFLICT);
		}
			
	}
	
	//Eliminar Servicio
	@RequestMapping(method=RequestMethod.DELETE, value="/eliminar/id/{idServicio}")
	public void eliminar(@PathVariable Long idServicio){
		
				servicioNegocio.eliminar(idServicio);
				
	}
	
	//Modificar Servicio
	@RequestMapping(method=RequestMethod.PUT)
	public void modificar(@RequestBody Servicio servicio){
		
		servicioNegocio.modificar(servicio);
	}
	
	
	

}
