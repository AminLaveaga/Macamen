package com.macamenApp.macamen.entidad;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table
public class Servicio {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long id;
	@Column
	private String nombre;
	@Column
	private String descripcion;
	@Column
	private String ticked;
	
	
	public Servicio() {
		super();
	}


	public Servicio(Long id, String nombre, String descripcion, String ticked) {
		super();
		this.id = id;
		this.nombre = nombre;
		this.descripcion = descripcion;
		this.ticked = ticked;
	}


	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public String getNombre() {
		return nombre;
	}


	public void setNombre(String nombre) {
		this.nombre = nombre;
	}


	public String getDescripcion() {
		return descripcion;
	}


	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}


	public String getTicked() {
		return ticked;
	}


	public void setTicked(String ticked) {
		this.ticked = ticked;
	}


	
	

}
