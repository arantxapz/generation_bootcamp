import java.util.Scanner;
//se obtiene del paquete java.util

public class Escaner {

	public static void main(String[] args) {
		Scanner escaner = new Scanner(System.in);
		System.out.print("Escribe un número");
		int numero = escaner.nextInt();
		
		if (numero < 10) {
			System.out.println("El número es menor a 10");
		}
		
		System.out.println(numero);

	}

}
