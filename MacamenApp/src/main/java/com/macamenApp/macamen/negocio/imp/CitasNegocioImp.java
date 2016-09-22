package com.macamenApp.macamen.negocio.imp;

import java.util.ArrayList;
import java.util.Date;

import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.macamenApp.macamen.dao.CitasDao;
import com.macamenApp.macamen.entidad.Citas;
import com.macamenApp.macamen.negocio.CitasNegocio;

@Service
public class CitasNegocioImp implements CitasNegocio {
	@Autowired
	CitasDao citasDao;

	public void guardar(Citas cita) {
		citasDao.save(cita);
		
	}

	public void modificar(Citas cita) {
		citasDao.save(cita);
		
	}

	public void Eliminar(Long id) {
		citasDao.delete(id);
		
	}

	public Citas buscar(Long id) {
		return citasDao.findOne(id);
	}

	public ArrayList<Citas> ListarCitas() {	
		return (ArrayList<Citas>)citasDao.findAll();
	}
	
	public ArrayList<Citas> citasPorFecha(Date fecha){
			
			return (ArrayList<Citas>)citasDao.findByFecha(fecha);
		
	}

}
