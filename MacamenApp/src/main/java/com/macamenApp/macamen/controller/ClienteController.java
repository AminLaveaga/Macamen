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

import com.macamenApp.macamen.entidad.Cliente;
import com.macamenApp.macamen.negocio.ClienteNegocio;

@RestController
@RequestMapping(value="/cliente")
public class ClienteController {
	@Autowired
	ClienteNegocio clienteNegocio;
	
	// listar cliente
	@RequestMapping(method=RequestMethod.GET,value="/buscar")
	public ArrayList<?> buscar(){
		return clienteNegocio.listarCliente();
	}
	
	//Buscar cliente

	@RequestMapping(method=RequestMethod.GET, value="/buscar/id/{idServicio}")
	public ResponseEntity<Cliente> buscar(@PathVariable Long idServicio){
			Cliente c=clienteNegocio.buscar(idServicio);
				
				return new ResponseEntity(c,HttpStatus.OK);
		
	}
	
	//Guardar cliente

	@RequestMapping(method=RequestMethod.POST)
	public ResponseEntity<?> guardar(@RequestBody Cliente cliente){
		
		clienteNegocio.guardar(cliente);
		return new ResponseEntity(HttpStatus.ACCEPTED);
	}
	//Modificar cliente

	@RequestMapping(method=RequestMethod.PUT)
	public ResponseEntity<?> modificar(@RequestBody Cliente cliente){
		clienteNegocio.modificar(cliente);
		return new ResponseEntity(HttpStatus.ACCEPTED);
	}
	
	//Eliminar cliente
	
	@RequestMapping(method=RequestMethod.DELETE, value="/eliminar/id/{idCliente}")
	public ResponseEntity<?> eliminar(@PathVariable Long idCliente){
		clienteNegocio.eliminar(idCliente);
		return new ResponseEntity(HttpStatus.OK);
	}

}
