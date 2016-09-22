package com.macamenApp.macamen.dao;

import java.util.ArrayList;
import java.util.Date;

import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.macamenApp.macamen.entidad.Citas;

public interface CitasDao extends JpaRepository <Citas, Long>{
		
	
	ArrayList<Citas> findByFecha(Date fecha);
}
