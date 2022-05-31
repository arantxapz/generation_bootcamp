package testGradle;

import org.junit.jupiter.api.*;
import static org.junit.jupiter.api.Assertions.*;

@DisplayName ("Tests de la clase Calculadora")
public class CalculadoraTest {

		@Test
		@DisplayName("M�todo para comprobar suma")//DisplayName sirve para nombrar los m�todos y clase de prueba
		public void sumaTest() {
			Calculadora sumaCalc = new Calculadora();
			Assertions.assertEquals(2, sumaCalc.suma(1, 1),"El resultado deber�a ser 2");
		}
		
		@Test
		@DisplayName("M�todo para comprobar assertions")
		public void assertionTest() {
			//boolean valorBoolean = true;
			//assertTrue(valorBoolean);
			assertAll(
			"Encabezado",
			()-> assertEquals(2, 1+1, "Deber�an ser 2"),//pas� el test
			()-> assertTrue(false, "Deber�a ser true")//no pas� el test
		);
		}
}
