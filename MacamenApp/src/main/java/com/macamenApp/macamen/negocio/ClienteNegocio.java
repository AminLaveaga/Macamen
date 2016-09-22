package com.macamenApp.macamen.negocio;

import java.util.ArrayList;

import com.macamenApp.macamen.entidad.Cliente;

public interface ClienteNegocio {

		void guardar(Cliente cliente);
		void modificar(Cliente cliente);
		void eliminar(Long id);
		Cliente buscar(Long id);
		ArrayList<Cliente> listarCliente();
}
