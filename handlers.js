const lista = document.getElementById("list");
const myImage = document.getElementById("myImage")

const images = {
    Guitarra: 'https://www.taylorguitars.com/sites/default/files/styles/guitar_pdp_feature/public/images/2022-02/Taylor-GS-Mini-series-e-Rosewood-feature-6.jpg?h=21c3dcaf&itok=xSpF4uw7',
    Piano: 'https://www.multivu.com/players/English/9080651-casio-america-new-privia-digital-pianos/image/PXS7000M_1662585949897-HR.jpg',
    Saxofon: 'https://tiendadelmusico.com/8198-medium_default/mybach-m1105b-saxofon-alto-con-estuche-semi-duro-y-accesorios.jpg',
    Bateria: 'https://storage.googleapis.com/tecnowestune/2020/10/59bc7c14-ar-529sre-03.jpg',
    Seleccion: 'https://concepto.de/wp-content/uploads/2020/03/musica-e1584123209397.jpg'
  };

const handlerEvent = (event) => {

    let opcionSeleccionada = event.target.value;

    if (opcionSeleccionada === "op0") {
        console.log("SELECIONE");
        myImage.src= images.Seleccion
    } else if (opcionSeleccionada === "op1") {
        console.log("Opción seleccionada GUITARRA");
        myImage.src = images.Guitarra
    } else if (opcionSeleccionada === "op2") {
        console.log("Opción seleccionada PIANO");
        myImage.src = images.Piano
    } else if (opcionSeleccionada === "op3") {
        console.log("Opción seleccionada SAXO");
        myImage.src = images.Saxofon
    } else if (opcionSeleccionada === "op4") {
        console.log("Opción seleccionada BATERIA");
        myImage.src = images.Bateria
    }

}

lista.addEventListener("change", handlerEvent);