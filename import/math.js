//1.- export { name1, name2, …, nameN };
//3.- export let name1, name2, …, nameN; // también var
export const secret_number=30;
export const name="Esto es mi modulo";

//puedo exportar mas de una variable al mismo tiempo
export let x=3,y=4;


//5.-export function FunctionName(){...}
export function add(x,y){
    return x+y;
}

export function subtract(x,y){
    return x-y;
}

export function multiply(x,y){
    return x*y;
}

export function divide(x,y){
    return x/y;
}

//6.- export class ClassName {...}
//exportar clases Math con un metodo que se llama double
export class Math{
    double(x){
        return x*x;
    }
}

//7.-export default expression;
//exportar el name por defecto, solo puede haber un valor por defecto a exportar
//export default name;

//7.-export default expression;
//puedo exportar un objeto
//export default{
//    name: 'Edu',
//    numero: 12,
//}

//8.-export default function (…) { … } // también class, function*
//podria haber exportado por defecto lo siguiente, esto son dos funciones
export default{
    add,
    subtract
}