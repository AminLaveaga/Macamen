package com.macamenApp.macamen.negocio;

import java.util.ArrayList;

import com.macamenApp.macamen.entidad.Empleado;

public interface EmpleadoNegocio {
	
	void guardar(Empleado empleado);
	void modificar(Empleado empleado);
	void eliminar(Long id);
	Empleado buscar(Long id);
	ArrayList <Empleado> listarEmpleado();

}
