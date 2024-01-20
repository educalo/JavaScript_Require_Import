//ejecución en la parte del servidor
//node salio antes de los modulos de javascript
//la unica forma era utilizar la importancion era hacerlo como sigue, de esta manera estoy requiriendo el modulo http
//1.- si abro una terminar y escribo node backend.js lo ejecuta sin ningun problema
//const http=require('http');

//2.- el siguiente comando nos indica un error porque node no puede ejecutar los import
import http from 'http';

//3.- lo puedo solucionar generando un package.json poniendo el siguiente comando en la terminal npm init -y
//añado al package.json una propiedad "type":"module"
//en este momento no me da error ejecutando node backend.js
