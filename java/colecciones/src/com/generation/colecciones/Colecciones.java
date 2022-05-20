package com.generation.colecciones;

import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

public class Colecciones {

	public static void main(String[] args) {
		//List - ArrayList
		//picoparéntesis
		System.out.println("\tList --- ArrayList");
		List<String> miArray= new ArrayList<String>();
		
		miArray.add("Pedro");
		miArray.add("Yair");
		miArray.add("María");
		miArray.add(1, "Raúl");
		
		//String elemento = miArray.remove(1);
		
		System.out.println(miArray);
		
		System.out.println(miArray.size());//length numero total de elementos
		
		String elemento = miArray.remove(1);
		
		System.out.println(miArray);
		
		System.out.println(miArray.size());//length numero total de elementos
		System.out.println(elemento);
		
		imprimir (miArray); 
		
		/* Wrappers o valores compuestos: Las colecciones no pueden guardar valores primitivos, sin embargo podemos utilizar los valores que los guardan como objetos
		 * long => Long
		 * double => Double
		 * int => Integer
		 * boolean => Boolean
		 * 
		 */
		
		int num1 = 10;
		Integer num2 = 10;
		
		System.out.println(num1);
		System.out.println(num2.getClass().getSimpleName());//regresa el tipo de dato 
		//instanceof Number Integer regresa un valor booleano si la variable contiene una instancia de la variable especificada, como tipeof
		
		
		List<Integer> miArray2 = new ArrayList<Integer>(); 
		
		miArray2.add(3);
		miArray2.add(1323541);
		miArray2.add(6552);
		
		imprimir (miArray2);
		System.out.println("\tSet --- HashSet");
		Set<String> miSet = new HashSet<String>();
		//no acepta elementos duplicados
		//no los guarda en un orden específico
		//La colección que funciona más rápido
		
		miSet.add("Martha");
		miSet.add("Martha");
		miSet.add("Lupe");
		miSet.add("Juan");
		miSet.add("Juan");
		miSet.add("Gabriel");
		
		System.out.println(miSet);
		
		imprimir(miSet);
		
		miSet.contains(miSet.contains("Yair")); //regresa un valor booleano que indica si el elemento existe dentro de la colección.
		miSet.remove(2); //no afecta porque no tienen un índice u orden asignado
		miSet.remove("Lupe"); //se tendría que especificar el elemento que se quiere eliminar.
	
		//Map -- HashMap -- Indice
		// declarar <Key/llave, value/valor>
		System.out.println("\t Map --- HashMap");
		
		Map<String, Integer> miMap = new HashMap<String, Integer>();
		
		miMap.put("Valor 1", 45);
		miMap.put("Valor 1", 250); //reescribe el valor de la llave especificada
		miMap.put("Valor 2", 50);
		miMap.put("Valor 3", 300);
		miMap.put("Valor 4", 180);
		
		System.out.println(miMap); //imprime todo (no se imprime como objeto sino como "diccionario")
		System.out.println(miMap.values()); //todos los valores
		System.out.println(miMap.keySet()); //todas las llaves
		
		System.out.println(miMap.get("Valor 1"));
		
		for (String llave : miMap.keySet()) {
			System.out.println(llave + " : " + miMap.get(llave));
			
		}
		}
		
	public static void imprimir (Collection coleccion) {
			for(Object elemento : coleccion) {
				System.out.println("Elemento = " +  elemento);
			}
		}
	}
		

