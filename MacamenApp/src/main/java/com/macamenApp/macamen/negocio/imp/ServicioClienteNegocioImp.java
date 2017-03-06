package com.macamenApp.macamen.negocio.imp;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;

import com.macamenApp.macamen.dao.ServicioClienteDao;

import com.macamenApp.macamen.entidad.ServicioCliente;
import com.macamenApp.macamen.negocio.ServicioClienteNegocio;

public class ServicioClienteNegocioImp implements ServicioClienteNegocio {
	
	@Autowired
	ServicioClienteDao servicioClienteDao;
	
	public void guardar(ServicioCliente sc) {
			
		servicioClienteDao.save(sc);
		
	}

	public void modificar(ServicioCliente sc) {
		servicioClienteDao.save(sc);
		
	}

	public void Eliminar(Long id) {
		servicioClienteDao.delete(id);
		
	}

	public ServicioCliente buscar(Long id) {
		
		return servicioClienteDao.findOne(id);
	}

	public ArrayList<ServicioCliente> ListarServicioCliente() {
		
		return (ArrayList<ServicioCliente>)servicioClienteDao.findAll();
	}

}
