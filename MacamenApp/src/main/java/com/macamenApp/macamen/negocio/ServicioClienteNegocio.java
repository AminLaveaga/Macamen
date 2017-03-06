package com.macamenApp.macamen.negocio;

import java.util.ArrayList;
import java.util.Date;

import com.macamenApp.macamen.entidad.Citas;
import com.macamenApp.macamen.entidad.ServicioCliente;

public interface ServicioClienteNegocio{
	

	void guardar(ServicioCliente sc);
	void modificar(ServicioCliente sc);
	void Eliminar(Long id);
	ServicioCliente buscar(Long id);
	ArrayList<ServicioCliente> ListarServicioCliente();
	


}
