package testGradle;

import org.junit.jupiter.api.*;
import static org.junit.jupiter.api.Assertions.*;

@DisplayName ("Tests de la clase Calculadora")
public class CalculadoraTest {

		@Test
		@DisplayName("Método para comprobar suma")//DisplayName sirve para nombrar los métodos y clase de prueba
		public void sumaTest() {
			Calculadora sumaCalc = new Calculadora();
			Assertions.assertEquals(2, sumaCalc.suma(1, 1),"El resultado debería ser 2");
		}
		
		@Test
		@DisplayName("Método para comprobar assertions")
		public void assertionTest() {
			//boolean valorBoolean = true;
			//assertTrue(valorBoolean);
			assertAll(
			"Encabezado",
			()-> assertEquals(2, 1+1, "Deberían ser 2"),//pasó el test
			()-> assertTrue(false, "Debería ser true")//no pasó el test
		);
		}
}
