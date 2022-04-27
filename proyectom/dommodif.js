let vehiculos= [
    {
        tipo: "Auto",
        precio: 10500,
        impuesto: 10,
    },
    {
        tipo: "Moto",
        precio: 20000,
        impuesto: 20,
    },
    {
        tipo: "Avion",
        precio: 50000,
        impuesto: 30,
    },
    {
        tipo: "Lancha",
        precio: 70000,
        impuesto: 15,
    },
];

    function agregarVehiculoAHTML (vehiculo) {

        let ul = document.createElement("ul");
    
        let li1 = document.createElement("li");
        li1.innerText = `El vehiculo que usted seleccionó ${vehiculo.tipo}`;
    
        let li2 = document.createElement("li");
        li2.innerText = `El precio es ${vehiculo.precio}`;
    
        let li3 = document.createElement("li");
        li3.innerText = `El impuesto es ${vehiculo.impuesto} %`;

            ul.append(li1, li2, li3);
    
        contenedor.append(ul);
    }

 let contenedor= document.getElementById ("contenedor");

//seleccionamos el select
let select= document.getElementById("select-vehiculo");

let opcionNula= document.createElement("option");
opcionNula.value= "";
opcionNula.innerText= "Seleccionar Vehículo";
select.append(opcionNula);



//recorremos el array de vehiculos
vehiculos.forEach((vehiculo) => {

    //creamos la opcion del select
    let option= document.createElement("option");
    option.value= vehiculo.precio;
    option.innerText= vehiculo.tipo;
    
    //agregamos la opcion al select
    select.append(option);

});

let boton= document.getElementById("boton1");
boton.addEventListener("click", () => {
   const valueSelect= select.value;
   
   if(valueSelect != "" ){
       const vehiculoEncontrado= vehiculos.find ((vehiculo) =>{
           return vehiculo.precio == valueSelect;
       });

       agregarVehiculoAHTML(vehiculoEncontrado);   
    } 
  
});




// const auto= new Vehiculo ("auto", 200000, 1, 10);
// const moto= new Vehiculo ("moto", 15000, 2, 5);
// const avion= new Vehiculo ("avion", 1000000, 2, 15);
// const lancha= new Vehiculo ("lancha", 302000, 3, 20 );

// //array de vehiculos
// const vehiculos = [auto, moto, avion, lancha]



// let contenedor= document.getElementById ("contenedor");
// let transportes= document.getElementById("transportes");


// transportes.addEventListener("change",(e)=>{
//     const target= e.target;
//     const value= target.value;

//     function agregarVehiculoAHTML () {

//         let ul = document.createElement("ul");
    
//         let li1 = document.createElement("li");
//         li1.innerText = `El vehiculo que usted seleccionó es ${value}`;
    
//         let li2 = document.createElement("li");
//         li2.innerText = "Tipo" + vehiculo.tipo;
    
//         let li3 = document.createElement("li");
//         li3.innerText = "Precio" + vehiculo.precio;

//         let li4 = document.createElement("li");
//         li4.innerText = "Impuesto" + vehiculo.impuesto;

//             ul.append(li1, li2, li3);
    
//         contenedor.append(ul);
//     }

//     agregarVehiculoAHTML();
// })

// let boton= document.getElementById("boton1");
// boton.addEventListener("click", () => {
//     const valueSelect= select.value;

// });

// if (valueSelect !== ""){

//     const transporteEncontrado= transportes.find(
//         (transporte ) =>{

//             agregarTransporteAHTML(transporteEncontrado);
    
// })
// }
