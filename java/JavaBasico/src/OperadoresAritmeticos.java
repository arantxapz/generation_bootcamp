
public class OperadoresAritmeticos {

	public static void main(String[] args) {
		
		//Suma 
		int suma = 10 + 5;
		
		//Resta
		int resta = 200-50;
		
		//Multiplicacion 
		int multiplicacion= 5*5;
		
		//Division: indicarlo como número flotante para que sea exacto el resultado 
		float division = 10/3f;
		
		//Modulo
		int modulo = 5%2;
		
				
		//Incremento
		float numero = 10;
		numero++;
		++numero;
		
		//Decremento
		numero--;
		--numero;
		
		//numero = numero +2 (reasignar el valor de número)
		numero += 2;
		
		//numero = numero -10
		numero -= 10;
		
		//numero = numero * 6
		numero *= 6;
		
		//numero = numero /7
		numero /= 7f; // Peligro 
		numero = (float) numero / 7;
		
		System.out.println(suma);
		System.out.println(resta);
		System.out.println(multiplicacion);
		System.out.println(division);
		System.out.println(modulo);
		System.out.println(numero);

	}

}
