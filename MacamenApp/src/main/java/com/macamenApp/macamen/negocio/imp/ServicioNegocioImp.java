package com.macamenApp.macamen.negocio.imp;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.macamenApp.macamen.dao.ServicioDao;
import com.macamenApp.macamen.entidad.Servicio;
import com.macamenApp.macamen.negocio.ServicioNegocio;

@Service
public class ServicioNegocioImp implements ServicioNegocio {
	
	@Autowired
	ServicioDao servicioDao;
	
	public void guardar(Servicio servicio) {
		
		servicioDao.save(servicio);
		
	}

	public void modificar(Servicio servicio) {
		servicioDao.save(servicio);
		
	}

	public void eliminar(Long idServicio) {
		servicioDao.delete(idServicio);
		
	}

	public Servicio buscarServicio(Long id) {
		return servicioDao.findOne(id);
		
	}

	public ArrayList<Servicio> listarServicios() {
		
		return (ArrayList<Servicio>) servicioDao.findAll();
	}

}
