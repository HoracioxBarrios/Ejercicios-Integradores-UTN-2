
/**
Ejercicio Integrador 2
Aspectos a evaluar:
Uso correcto de métodos de entrada y salida de datos (alert, prompt, document.getElementById)
Uso correcto de variables y sus identificadores (nombres de variables)
Concatenación
Uso de parseInt / parseFloat
Cálculo de porcentajes

Se ingresará por id el valor de una compra de productos para el hogar. 
Se deberá agregar el iva (21%) y  luego se deberá restar el 5% en concepto 
de compra mayorista. El programa deberá mostrar por alert importe bruto, el iva, 
el importe con iva, el valor del descuento y el total a pagar.

Nota:Se puede realizar en el ejercicio 3 de E/S
 */
function mostrar()
{
	let valorDelProducto;
	let impuestoIva;
	let descuento;
	let importeConIva;
	let importeConDescuento;

	//tomo el dato por ID
	valorDelProducto = parseFloat(document.getElementById("txtIdNombre").value);
	// iva 21%
	impuestoIva = (valorDelProducto * 21)/100;
	//importe + iva 21%
	importeConIva = valorDelProducto + impuestoIva;
	//decuento del 5% al importe con iva
	descuento = (importeConIva *5 )/100;
	// importe final con descuento de 5%
	importeConDescuento = importeConIva - descuento;
	


	//lo fixeo para que me muestre en este caso dos decimales
	alert("El importe Bruto es: "+ valorDelProducto.toFixed(2) + " $" + "\n"
	+ "El IVA 21% : "+ impuestoIva.toFixed(2) + "\n" 
	+ "El importe con IVA es: "+ importeConIva.toFixed(2) + " $" + "\n"
	+ "El valor de descuento del 5% es: "+ descuento.toFixed(2) + " $" + "\n"
	+ "El total a pagar es: " + importeConDescuento.toFixed(2) + " $" );

}
