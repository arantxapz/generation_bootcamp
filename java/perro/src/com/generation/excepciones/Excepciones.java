package com.generation.excepciones;

public class Excepciones {

	public static void main(String[] args) {
		int num1 = 10;
		Integer num2 = null;
		
		float division; //ArithmeticException
		
		//try catch-finally
		try {
			//código que vamos a probar
			division = num1/num2;
		
		}catch(ArithmeticException ex) {// la excepción a observar; ex(objeto que se genera)
			//lo que se va a realizar cuando se detecte una excepción
			division = 0.0f;
		System.out.println("Error: " + ex.getMessage()); //ex.getMessage contiene mensaje del error 
		}catch(NullPointerException ex) {
			division= 0.0f;
		System.out.println("Error: " + ex.getMessage());
		
		}finally { //ejecutar algún código más
			System.out.println("Finalizó el try catch");
			
		}
		
		System.out.println(division);
	}

}
