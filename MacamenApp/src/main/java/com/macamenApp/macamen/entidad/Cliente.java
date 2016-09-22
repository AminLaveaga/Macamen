package com.macamenApp.macamen.entidad;




import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;





@Entity
@Table
public class Cliente {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long id;
	@Column
	private String nombre;
	@Column
	private String telefono;
	@Column
	private String direccion;
	@Column
	private String ocupacion;
	@Column
	private String fNacimiento;
	
	public Cliente() {
		super();
	}

	public Cliente(Long id, String nombre, String telefono, String direccion, String ocupacion, String fNacimiento) {
		super();
		this.id = id;
		this.nombre = nombre;
		this.telefono = telefono;
		this.direccion = direccion;
		this.ocupacion = ocupacion;
		this.fNacimiento = fNacimiento;
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

	public String getTelefono() {
		return telefono;
	}

	public void setTelefono(String telefono) {
		this.telefono = telefono;
	}

	public String getDireccion() {
		return direccion;
	}

	public void setDireccion(String direccion) {
		this.direccion = direccion;
	}

	public String getOcupacion() {
		return ocupacion;
	}

	public void setOcupacion(String ocupacion) {
		this.ocupacion = ocupacion;
	}

	public String getfNacimiento() {
		return fNacimiento;
	}

	public void setfNacimiento(String fNacimiento) {
		this.fNacimiento = fNacimiento;
	}
	
	
	


	
	
	
}
