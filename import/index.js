//selecciono las cosas que quiero importar desde math.js
//si pulso ctrl+espacio dentro de las llaves me sale todo lo que puedo importar
//si trabajamos con framework tipo angular, react no hace falta poner la extensión js del fichero, utilizan una herramienta que lo hace por nosotros es Webpack
//hay varias formas de exportar tal como no lo indica en Mozilla Developer, poniendo en google mozilla export
/*
1.- export { name1, name2, …, nameN };
2.- export { variable1 as name1, variable2 as name2, …, nameN };
3.- export let name1, name2, …, nameN; // también var
4.- export let name1 = …, name2 = …, …, nameN; // también var, const
5.-export function FunctionName(){...}
6.- export class ClassName {...}

7.-export default expression;
8.-export default function (…) { … } // también class, function*
9.-export default function name1(…) { … } // también class, function*
10.-export { name1 as default, … };

11.-export * from …;
12.-export { name1, name2, …, nameN } from …;
13.-export { import1 as name1, import2 as name2, …, nameN } from …;
14.-export { default } from …;
*/
//2.- export { variable1 as name1, variable2 as name2, …, nameN };
//importar los modulos que han sido definidos como export en math.js
//puedo importar una funcion y renombrarla como el caso de add como sumar
import {
    secret_number as num1,
    add as sumar,
    subtract as restar,
    multiply,
    divide as dividir,
    name as nombre,
    x,
    y,
    Math,   
} from './math.js';


//si hago lo siguiente le estoy diciendo que me importe el valor por defecto que tenga math.js
//solo puede haber un solo valor por defecto
//por supuesto debe haber un valor por defecto definido
import mimodulo from './math.js';
//si exporto un objeto
//console.log(mimodulo.name, mimodulo.numero);
//utilizo las funciones importadas desde un objeto
console.log (mimodulo.add(5.6));
console.log (mimodulo.subtract(7,5));

//11.-export * from …;
//13.-export { import1 as name1, import2 as name2, …, nameN } from …;
//importo todos los modulos como math
//es como un default pero lo estamos haciendo todo a traves de un alias
import * as math from './math.js';
console.log(math.add(4,7));
console.log(math.subtract(6,3));

//funcion que suma, si tengo dos funciones con el mismo nombre una buena solucion es resnombrar la parte que nos traemos en nuestro caso de math.js
function add(a,b){
    return a+b;
}

console.log(num1);
console.log(add(2,1));
console.log(sumar(2,1));
console.log(restar(2,1));
console.log(dividir(2,1));

console.log((2,1));
console.log(nombre);

console.log(x);
console.log(y);

//utilizo una clase importada
const math = new Math();
console.log(math.double(4));








