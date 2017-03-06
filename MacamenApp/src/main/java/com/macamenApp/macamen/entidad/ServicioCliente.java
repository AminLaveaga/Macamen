package com.macamenApp.macamen.entidad;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table
public class ServicioCliente {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long id;
	//@OneToOne
	@ManyToOne(fetch=FetchType.EAGER)
	@JoinColumn(name="idServicio")
	private Servicio servicio;
	//@OneToOne
	@ManyToOne(fetch=FetchType.EAGER)
	@JoinColumn(name="idEmpleado")
	private Empleado empleado;
	
	public ServicioCliente() {
		super();
	}

	public ServicioCliente(long id, Servicio servicio, Empleado empleado) {
		super();
		this.id = id;
		this.servicio = servicio;
		this.empleado = empleado;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Servicio getServicio() {
		return servicio;
	}

	public void setServicio(Servicio servicio) {
		this.servicio = servicio;
	}

	public Empleado getEmpleado() {
		return empleado;
	}

	public void setEmpleado(Empleado empleado) {
		this.empleado = empleado;
	}
	
	

}
