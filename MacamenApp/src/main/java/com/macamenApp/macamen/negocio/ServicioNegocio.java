package com.macamenApp.macamen.negocio;

import java.util.ArrayList;


import com.macamenApp.macamen.entidad.Servicio;


public interface ServicioNegocio {
	
	void guardar(Servicio servicio);
	void modificar(Servicio servicio);
	void eliminar(Long id);
	Servicio buscarServicio(Long id);
	ArrayList<Servicio> listarServicios();

	

}
