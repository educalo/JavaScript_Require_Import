console.log("Hola Mundo");
let cantidad = 1000;

function saludar(){
    console.log("hola mundo de nuevo");
}

module.exports.cantidad= cantidad;
module.exports.saludar = saludar();

//puedo hacerlo de la siguiente manera
/*
module.exports ={
    cantidad: cantidad,
    saludar: saludar(),
}
*/