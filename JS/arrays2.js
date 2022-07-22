/* 2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

Mostrar la longitud del arreglo.
Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
Añade en última posición la ciudad de París.
Escribe por pantalla el elemento que ocupa la segunda posición.
Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.
*/

//almacenarlas en un array
let ciudades = [];
//Crear scrpt que solicite mediante prompt el nombre de ciudades


do {

  
for(i = 0; i <= 2; i++){
  ciudades = prompt('Ingrese una ciudad: ');
  if (ciudades === null){
    ciudades = '';
  }
    document.write('<br>'+ciudades);
    
}

}while (ciudades === true);

//mostrar la longitud del arreglo

/*for (i = 0; i <= 4; i++) {
  ciudades = prompt("Ingrese el nombre de una ciudad: "); 
    
    
  document.write('<br>'+ciudades);
}*/

//document.write('Eligió: '+ ciudades);
//ciudades = ciudades.length

//document.write(ciudades[ciudades.length-1]);

//document.write(ciudades[0,2,4]);

//ciudades.push('Paris');

//(ciudades.indexOf['Roma']);

//ciudades.splice(1,0);
