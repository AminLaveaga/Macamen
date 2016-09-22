package com.macamenApp.macamen.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.macamenApp.macamen.entidad.Cliente;

public interface ClienteDao extends JpaRepository<Cliente, Long>{

}
