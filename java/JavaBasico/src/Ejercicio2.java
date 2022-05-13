import java.util.Scanner;

public class Ejercicio2 {

	public static void main(String[] args) {
		Scanner escaner1 = new Scanner (System.in);
		System.out.println("Escribe tu peso");
		float peso = escaner1.nextFloat();
		
		Scanner escaner2 = new Scanner (System.in);
		System.out.println("Escribe tu altura");
		float altura = escaner2.nextFloat();
		
		float imc = (peso / (altura* altura));		
		System.out.println(imc);
						
		/*if (imc >=18.5 <=25) {
		System.out.println ("Your weight radio is good");
		} else {
		System.out.println("Your health is not good");
		*/
	}

}

