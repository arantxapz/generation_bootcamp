package com.pokemon;

public class TipoPlanta extends Pokemon{
	
	//atributos
	private int numeroHojas;
	
	//constructor
	public TipoPlanta(int id, int edad, int nivel, String nombre, boolean evolucion, int numeroHojas) {
		super(id,edad, nivel, nombre, evolucion); //se deben pasar los datos del constructor de la clase padre
		this.numeroHojas=numeroHojas;
	}
	
	//metodos
	public void paralizar() {
		System.out.println(getNombre() + " está paralizando");
	}
	
	public void envenenar() {
		System.out.println(getNombre() + " está envenenando");
	}
	
	public void atacar() {
		System.out.println(getNombre() + "está atacando");
	}
	//getters y setters
	public int numeroHojas(){
	return numeroHojas;
		
}

	@Override //método únicamente para los hijos
	public void saludar(String mensaje) {
		System.out.println(mensaje);
		
	}
}