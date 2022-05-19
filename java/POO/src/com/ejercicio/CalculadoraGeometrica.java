package com.ejercicio;

public class CalculadoraGeometrica {

	public static void main(String[] args) {
  // Instanciacion areas
        
        Areas area = new Areas();
        
        Perimetro Per = new Perimetro();
        
        
        double areaCirculo = area.areaCirculo(4);
        System.out.println("El área del circulo es " + areaCirculo);
        
        double areaCuadrado = area.areaCuadrado(2);
        System.out.println("El área del cuadrado es " + areaCuadrado);
        
        double areaTriaungulo = area.areaTriangulo(4, 5);
        System.out.println("El área del triangulo es " + areaTriaungulo);
        
        double perimetroCirculo = Per.perimetroCirculo(5);
        System.out.println("El perimetro del circulo es " + perimetroCirculo);
    
        double perCuadrado = Per.perimetroCuadrdado(2);
        System.out.println("El perimetro del cuadrado es " + perCuadrado);
        
        double pertriangulo = Per.periTriangulo(5, 6, 7);
        System.out.println("El perimetro del triangulo es " + pertriangulo);
      

    }

	}


