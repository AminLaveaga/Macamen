package com.macamenApp.macamen.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.macamenApp.macamen.entidad.Empleado;

public interface EmpleadoDao extends JpaRepository<Empleado, Long> {

}
