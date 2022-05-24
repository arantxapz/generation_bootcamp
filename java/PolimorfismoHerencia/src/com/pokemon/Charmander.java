package com.pokemon;
//simulaci�n de herencia m�ltiple
public class Charmander extends Pokemon implements TipoFuego, TipoVolador {

	public Charmander(int id, int edad, int nivel, String nombre, boolean evolucion) {
		super(id, edad, nivel, nombre, evolucion);
	}
	
	@Override
	public void lanzaLlamas() {
		System.out.println("Lanzallamas");
		
	}

	@Override
	public void araniar() {
		System.out.println("Ara�ar");
		
	}

	@Override
	public void volar() {
		System.out.println("Volar");
		
	}

	@Override
	public void saludar(String mensaje) {
		System.out.println("saludando");
		
	}

}
