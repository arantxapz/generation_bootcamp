package testGradleTarea;
import org.junit.jupiter.api.*;


@DisplayName("Test Calculadora TDD")
public class CalculatorTest
{
    CalculatorTDD calculator = new CalculatorTDD();

    @Test
    @DisplayName("Comprobar suma")
    public void addTest()
    {
    	CalculatorTDD sumaCalc = new CalculatorTDD();
        Assertions.assertEquals(5, sumaCalc.addNumbers(3, 2),"El resultado debería ser 5");
    }


    @Test
    @DisplayName("Comprobar resta")
    public void subtractTest()
    {
    	CalculatorTDD restaCalc = new CalculatorTDD();
        Assertions.assertEquals(8, restaCalc.subtractNumbers(12, 4), "El resultado debería ser 8" );
    }


    @Test
    @DisplayName("Comprobar multiplicación")
    public void multiplyTest()
    {
    	CalculatorTDD multiCalc = new CalculatorTDD();
        Assertions.assertEquals(49, multiCalc.multiplyNumbers(7, 7), "El resultado debería ser 49" );
    }


    @Test
    @DisplayName("Comprobar división")
    public void divideTest()
    {
    	CalculatorTDD divCalc = new CalculatorTDD();
        Assertions.assertEquals(2, divCalc.divideNumbers(10, 5), "El resultado debería ser 2" );
    }
}