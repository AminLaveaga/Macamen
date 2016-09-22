package com.macamenApp.macamen.negocio.imp;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.macamenApp.macamen.dao.ClienteDao;
import com.macamenApp.macamen.entidad.Cliente;
import com.macamenApp.macamen.negocio.ClienteNegocio;

@Service
public class ClienteNegocioImp implements ClienteNegocio{
	
	@Autowired
	ClienteDao clienteDao;

	public void guardar(Cliente cliente) {
		
		clienteDao.save(cliente);
		
	}

	public void modificar(Cliente cliente) {
		
		clienteDao.save(cliente);
		
	}

	public void eliminar(Long id) {
		
		clienteDao.delete(id);
		
	}

	public Cliente buscar(Long id) {
		
		return clienteDao.findOne(id);
	}

	public ArrayList<Cliente> listarCliente() {
		
		return(ArrayList<Cliente>) clienteDao.findAll();
	}

}
