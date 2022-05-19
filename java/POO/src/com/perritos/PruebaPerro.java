package com.perritos;

public class PruebaPerro {

	public static void main(String[] args) {
	
				
		//Instanciar
		Perro perro1 = new Perro ("Patitas", 3);
		
		//cambiar sus atributos
		perro1.raza= "husky";
		perro1.tamanio = "Mediano";
		
		//metodo
		perro1.ladrar();
		int edadP =perro1.edadPerruna();
		System.out.println(edadP);
		
		
		perro1.mensaje(); //con instanciación
		Perro.mensaje(); // sin instanciación (método estático)
		
		
		Perro perro2 = new Perro("Cookies", 1);
		perro2.raza= "Dalmata";
		perro2.tamanio= "Grande";
		
		perro2.ladrar();

	}

}
