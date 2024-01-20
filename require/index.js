//La función require() puede ser llamada desde cualquier parte dentro del programa, mientras que import() no puede ser llamada condicionalmente. Siempre se ejecuta al inicio del archivo.
//Para incluir un módulo con la función require(), ese módulo debe ser guardado con una extensión .js

// index.js
//1.- modulos nativos de node.js dentro docs de la pagina oficial de node.js
//ejecutamos esto en un terminal poniendo node index.js
const os = require('os');
const fs = require('fs');


//nos devuelve informacion de nuestro procesador
let cpu= os.cpus();
let sistema= os.platform();
let usuario= os.hostname();

console.log(cpu);
console.log(sistema);
console.log(usuario);

//callback un metodo que se ejecutara cuando ejecute la funcion
fs.appendFile('prueba.txt', "Suscribite", function(error) {
    if (error){
        console.log('Error al crear archivo');
    }
});

//cpu es un json y tengo de deserializarlo
fs.appendFile('prueba.txt', "Informacion de cpu: " + JSON.stringify(cpu), function(error) {
    if (error){
        console.log('Error al crear archivo');
    }
});

//2.- modulos de mi propia aplicacion desarrollada
const mi = require('./script.js');
console.log(mi.cantidad);
mi.saludar;