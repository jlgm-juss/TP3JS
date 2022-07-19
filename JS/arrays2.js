/* 2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

Mostrar la longitud del arreglo.
Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
Añade en última posición la ciudad de París.
Escribe por pantalla el elemento que ocupa la segunda posición.
Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.
*/

let info = Array();
for (c = 0; c < 2; c++ ){
    info[c] = prompt('Ingrese su ciudad');
}
let ciudades = ['Madrid', 'Barcelona', 'Roma', 'Berlin', 'Londres'];
document.write('Eligió: '+ ciudades);

document.write(ciudades[ciudades.length-1]);

document.write(ciudades[0,2,4]);

ciudades.push('Paris');

(ciudades.indexOf['Roma']);

ciudades.splice(1,0);





