package ciclos;

import java.util.Scanner;

public class Ejercicio1 {

	public static void main(String[] args) {
		int numero = 7;
		
		Scanner sc= new Scanner (System.in);
		System.out.println("Adivina el n�mero");
		int numero2= sc.nextInt();
		
		while ((numero2 == numero) == false) {
			if ((numero2 == numero) == false) { 
				System.out.println("N�mero incorrecto");
				}		
		}
		System.out.println("�Felicidades! Adivinaste el n�mero");
		}
		}
		