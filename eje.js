//ejercicio N° 1
/*let numero1= parseInt (prompt ("Por Favor Indique el primer número"));
let numero2= parseInt (prompt ("Por Favor Indique el Segundo número"))
if (numero1 > numero2){
    alert (numero1 + " Es el Mayor")
} else{
    alert (numero2 + " Es el mayor ")
}*/

//ejercicio N! 2
/*let cantidadHelado= parseInt (prompt("Por favor ingrese cantidad de Helados que desea"));
let helado= 5;
let resultado= (cantidadHelado * helado);
alert("Su pedido le costará $" + resultado);*/

//ejercicio N°3
/*let edad= parseInt (prompt("Por favor ingrese su Edad"));
let anioActual= 2022;
let anioNacimiento= (anioActual - edad);
alert("Su año de Nacimiento es " + anioNacimiento);*/

//ejercicio N° 4
/*let nota1= parseInt (prompt("Por favor ingrese su Primer Nota"));
let nota2= parseInt (prompt("Por favor ingrese su Segunda Nota"));
let nota3= parseInt (prompt("Por favor ingrese su Tercer Nota"));
let resultado= ((nota1 + nota2 + nota3) / 3);
if (resultado >= 4){
    alert("Usted se encuentra aprobado");
}else{
    alert("Usted está desaprobado, vayase a su casa")
}*/

//ejercicio N° 5
/*let anioNacimiento= parseInt (prompt("Por favor ingrese su año de nacimiento"));
let anioActual= 2022;
let resultadoEdad= (anioActual - anioNacimiento);
let nombre
if (resultadoEdad > 18){
    nombre= prompt("Por favor ingrese su Nombre y Apellido");
alert("Hola " + nombre + " Su edad es actual es " + resultadoEdad + " Años")
}else{
    alert("Usted No puede continuar en esta página")
}*/



//ejercicio de porcentaje de iVa
/*let precioProducto= parseInt (prompt ("Por Favor Ingrese el precio del Producto"));
let PrecioConIva= (precioProducto * 21) / 100;
let resultado= ("El precio de su producto con iva es de $ " + (precioProducto + PrecioConIva))
alert (resultado)*/

//ejercicio con destinos de viaje
let lugarViaje= prompt ("Por Favor Indique a que lugar desea usted viajar");

if((lugarViaje == "colombia") || (lugarViaje == "Colombia") || (lugarViaje == "COLOMBIA")){
    alert(" El precio para Colombia es ingresado es " + "$ 40");
}else if ((lugarViaje == "mexico") || (lugarViaje == "Mexico") || (lugarViaje == "méxico")){
     alert(" El precio para viajar a México es " + "$ 50");
} else if ((lugarViaje == "brasil") || (lugarViaje == "Brasil") || (lugarViaje == "BRASIL")){
    alert(" El precio para viajar a Brasil es " + "$ 30");
} else if ((lugarViaje == "uruguay") || (lugarViaje == "Uruguay") || (lugarViaje == "URUGUAY")){
    alert(" El precio para viajar a Uruguay es " + "$ 20");
} else if ((lugarViaje == "chile") || (lugarViaje == "Chile") || (lugarViaje == "CHILE")){
    alert(" El precio para viajar a Chile es " + "$ 20");
}else if ((lugarViaje == "ecuador") || (lugarViaje == "Ecuador") || (lugarViaje == "ECUADOR")){
    alert(" El precio para viajar a Ecuador es " + "$ 30");
}else if ((lugarViaje == "estados unidos") || (lugarViaje == "Estados Unidos") || (lugarViaje == "ESTADOS UNIDOS")){
    alert(" El precio para viajar a Estados Unidos es " + "$ 50");
}


