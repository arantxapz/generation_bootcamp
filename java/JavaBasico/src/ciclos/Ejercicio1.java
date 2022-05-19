package ciclos;

import java.util.Scanner;

public class Ejercicio1 {

	public static void main(String[] args) {
		int numero = 7;
		
		Scanner sc= new Scanner (System.in);
		System.out.println("Adivina el número");
		int numero2= sc.nextInt();
		
		while ((numero2 == numero) == false) {
			if ((numero2 == numero) == false) { 
				System.out.println("Número incorrecto");
				}		
		}
		System.out.println("¡Felicidades! Adivinaste el número");
		}
		}
		