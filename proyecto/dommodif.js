
class Vehiculo{
    constructor (tipo, precio, cantidad, impuesto){
        this.tipo = tipo;
        this.precio = parseFloat(precio);
        this.cantidad = cantidad;
        this.impuesto = impuesto;
}
mostrar(){
    console.log("El vehículo seleccionado es " + this.tipo + " El precio es $ " + this.precio + " La cantidad es " + this.cantidad + " El impuesto alcanzado es " + this.impuesto );
}
}

const auto= new Vehiculo ("auto", 200000, 1, 10);
const moto= new Vehiculo ("moto", 15000, 2, 5);
const avion= new Vehiculo ("avion", 1000000, 2, 15);
const lancha= new Vehiculo ("lancha", 302000, 3, 20 );

//array de vehiculos
const vehiculos = [auto, moto, avion, lancha]


let contenedor= document.getElementById ("contenedor");
let transportes= document.getElementById("transportes");
transportes.onchange=()=>{

    function agregarTransporteAHTML () {

        let ul = document.createElement("ul");
    
        let li1 = document.createElement("li");
        li1.innerText = `El vehiculo que usted seleccionó es ${auto.tipo}`;
    
        let li2 = document.createElement("li");
        li2.innerText = ` El valor de su vehículo es $ ${auto.precio}`;
    
        let li3 = document.createElement("li");
        li3.innerText = ` La cantidad disponible es ${auto.cantidad}`;

        let li4 = document.createElement("li");
        li4.innerText = `El impuesto alcanzado es ${auto.impuesto} %`;

            ul.append(li1, li2, li3, li4);
    
        contenedor.append(ul);
    }


let eleccion= transportes.value;
eleccion= eleccion


//método de filtrado en el array de vehiculos
const resultado = vehiculos.filter((el) => el.tipo.includes('auto'))
const resultado2= vehiculos.filter ((el) => el.tipo.includes('moto'))
const resultado3= vehiculos.filter ((el) => el.tipo.includes('avion'))
const resultado4= vehiculos.filter ((el) => el.tipo.includes('lancha'))

// metodo de busqueda de impuestos hago un index OF sobre los impuestos y utilizo el mismo prompt
//ordenar todas las respuestas sobre el cada elemento en el switch
const impuestoAuto = auto.impuesto
const impuestoMoto= moto.impuesto
const impuestoAvion= avion.impuesto
const impuestoLancha= lancha.impuesto 
const impuestos= [impuestoAuto, impuestoMoto, impuestoAvion, impuestoLancha]


switch (eleccion){
    case "auto":
    let valorAuto= [auto.precio];
    const suma  = (a,b,) => a + b
    const impAu   = x => x * 0.10
    let nuevoPrecioAut = suma(parseInt(valorAuto), impAu(valorAuto));
    console.log(resultado);
    alert(`El valor de su Auto con Impuesto es de $ ${nuevoPrecioAut}`);
    let resultImpuestosIndexAuto = impuestos.indexOf(impuestoAuto);
    console.log(`El índice de su impuesto es el N° ${resultImpuestosIndexAuto} y su valor es de ${auto.impuesto} %`);
    agregarTransporteAHTML();
    break;
    case "moto":
    let valorMoto= [moto.precio];
    const suma1  = (a,b,) => a + b
    const impMo = x => x * 0.05
    let nuevoPrecioMot = suma1(parseInt(valorMoto), impMo(valorMoto));
    console.log(resultado2);
    alert(`El valor de su Moto con Impuesto es de $ ${nuevoPrecioMot}`);
    let resultImpuestosIndexmMoto = impuestos.indexOf(impuestoMoto);
    console.log(`El índice de su impuesto es el N° ${resultImpuestosIndexmMoto} y su valor es de ${moto.impuesto} %`);
    agregarTransporteAHTML();
    break;
    case "avion":
    let nuevoPrecioAvi= avion.precio * 1.15
    console.log(resultado3);
    alert(`El valor de su Avión con Impuesto es de $ ${nuevoPrecioAvi}`);
    let resultImpuestosIndexAvion = impuestos.indexOf(impuestoAvion);
    console.log(`El índice de su impuesto es el N° ${resultImpuestosIndexAvion} y su valor es de ${avion.impuesto} %`);
    agregarTransporteAHTML();
    break;
    case "lancha":
    let nuevoPrecioLancha= lancha.precio * 1.20
    console.log(resultado4);
    alert(`El valor de su Lancha con Impuesto es de $ ${nuevoPrecioLancha}`); 
    let resultImpuestosIndexLancha = impuestos.indexOf(impuestoLancha);
    console.log(`El índice de su impuesto es el N° ${resultImpuestosIndexLancha} y su valor es de ${lancha.impuesto} %`);
    agregarTransporteAHTML();
    break;
    default:
    alert("No ingresó vehiculo");
    break;
}
}

