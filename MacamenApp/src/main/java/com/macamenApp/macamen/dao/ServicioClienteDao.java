package com.macamenApp.macamen.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.macamenApp.macamen.entidad.ServicioCliente;

public interface ServicioClienteDao extends JpaRepository<ServicioCliente, Long> {

}
