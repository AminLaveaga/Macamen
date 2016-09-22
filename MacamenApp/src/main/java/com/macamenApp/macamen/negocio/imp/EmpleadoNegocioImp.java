package com.macamenApp.macamen.negocio.imp;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.macamenApp.macamen.dao.EmpleadoDao;
import com.macamenApp.macamen.entidad.Empleado;
import com.macamenApp.macamen.negocio.EmpleadoNegocio;


@Service
public class EmpleadoNegocioImp implements EmpleadoNegocio{
	
	@Autowired
	EmpleadoDao empleadoDao;

	public void guardar(Empleado empleado) {
		empleadoDao.save(empleado);
		
	}

	public void modificar(Empleado empleado) {
		empleadoDao.save(empleado);
		
	}

	public void eliminar(Long id) {
		empleadoDao.delete(id);
		
	}

	public Empleado buscar(Long id) {
		
		return empleadoDao.findOne(id);
	}

	public ArrayList<Empleado> listarEmpleado() {
		
		return (ArrayList<Empleado>)empleadoDao.findAll();
	}

	
}
