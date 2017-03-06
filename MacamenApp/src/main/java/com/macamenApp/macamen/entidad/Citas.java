package com.macamenApp.macamen.entidad;

import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.hibernate.annotations.IndexColumn;
import org.hibernate.annotations.LazyCollection;
import org.hibernate.annotations.LazyCollectionOption;

import com.macamenApp.macamen.entidad.Cliente;

@Entity
@Table
public class Citas {
	

	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long id;
	@Temporal(TemporalType.DATE)
	@Column
	private Date fecha;
	@Temporal(TemporalType.TIME)
	@Column
	private Date hora;
	@LazyCollection(LazyCollectionOption.FALSE)
	@OneToMany(cascade=CascadeType.ALL)
	//@JoinTable(name="citaServicioEmpleado", joinColumns={@JoinColumn(name="IdCita")}, inverseJoinColumns={@JoinColumn(name="idServicioCliente")})
	@JoinColumn(name="idCita")
	private List<ServicioCliente> servicioCliente;
	@OneToOne
	@JoinColumn(name="idCliente")
	private Cliente cliente; 
	/*@ManyToMany
	@JoinTable(name="citaServicio", joinColumns={@JoinColumn(name="idCita")}, inverseJoinColumns={@JoinColumn(name="idServicio")})
	private	List<Servicio> servicio;*/
	public Citas() {
		super();
	}
	
	public Citas(Long id, Date fecha, Date hora, List<ServicioCliente> servicioCliente, Cliente cliente) {
		super();
		this.id = id;
		this.fecha = fecha;
		this.hora = hora;
		this.servicioCliente = servicioCliente;
		this.cliente = cliente;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Date getFecha() {
		return fecha;
	}

	public void setFecha(Date fecha) {
		this.fecha = fecha;
	}

	public Date getHora() {
		return hora;
	}

	public void setHora(Date hora) {
		this.hora = hora;
	}

	public List<ServicioCliente> getServicioCliente() {
		return servicioCliente;
	}

	public void setServicioCliente(List<ServicioCliente> servicioCliente) {
		this.servicioCliente = servicioCliente;
	}

	public Cliente getCliente() {
		return cliente;
	}

	public void setCliente(Cliente cliente) {
		this.cliente = cliente;
	}

	
	
	
	
}
