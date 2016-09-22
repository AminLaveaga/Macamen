package com.macamenApp.macamen.negocio;

import java.util.ArrayList;
import java.util.Date;

import com.macamenApp.macamen.entidad.Citas;

public interface CitasNegocio {
	
	void guardar(Citas cita);
	void modificar(Citas cita);
	void Eliminar(Long id);
	Citas buscar(Long id);
	ArrayList<Citas> ListarCitas();
	ArrayList<Citas> citasPorFecha(Date fecha);

}
