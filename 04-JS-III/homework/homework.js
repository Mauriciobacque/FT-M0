// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:
  return array[0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length -1];
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  var nuevoArray = [];
  for (var i = 0; i < array.length; i++) {
    array[i]++
    nuevoArray.push(array [i]);  
  }
  return nuevoArray;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:

  /*var str = palabras[0];
  for (var i = 0; i < palabras.length; i++) {
    str = str + ' ' + palabras[i];
  }
return str;*/
return palabras.join(' ');
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  for (let i = 0; i < array.length; i++) {
    if(elemento === array[i]){
      return true;
    }  
  }
  return false;

  //otra forma:
  /* return array.includes(elemento);*/
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var suma = 0;
  for (var i = 0; i < numeros.length; i++) {
    suma = suma + numeros [i];
  }
  return suma;

}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var suma = 0;
  for (var i = 0; i < resultadosTest.length; i++) {
    suma = suma + (resultadosTest[i]/resultadosTest.length);  
  }
  return Math.round(suma);

  //otra forma:
  //return agregarNumeros(resultadosTest)/resultadosTest.length; //aca invocamos la funcion anterior y sacamos el promedio
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var numMax = numeros[0];
  for (var i = 0; i < numeros.length; i++) {
    if(numeros[i] > numMax)return numeros[i];  
  }
  return numMax;
}


function tablaDelSeis(){
  //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
  //Escribe tu código aquí:  
  let tabla6 = [];
  for (let i = 0; i < 11; i++) {
    tabla6.push(6 * i);
  }
  return tabla6
}

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  if(arguments.length < 1)return 0;
  var resultado = 1;
  for (var i = 0; i < arguments.length; i++) {
    resultado = resultado * arguments[i];
  }
  return resultado;
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí:
  var cont = 0;
  for (var i = 0; i < arreglo.length; i++) {
    if(arreglo[i] > 18){
      cont ++
    } 
  }
  return cont;

}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: "Es fin de semana"
  //si el día corresponde a Sábado o Domingo y "Es dia Laboral" en caso contrario. 
  //Escribe tu código aquí:  
  if (numeroDeDia === 1 || numeroDeDia === 7){
    return "Es fin de semana";
  }
  return "Es dia Laboral"; 
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí:
  var aux = n.toString();
  if (aux[0] === '9'){
    return true;
  }
  return false;
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí:
  var a = arreglo [0];
  
  for (var i = 1; i< arreglo.length; i++){
    if (a === arreglo[i]){
      a = arreglo[i]
    }else{
      return false;
    }  
  } 
  return true;
  
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var array2 = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i]=== 'Enero' || array[i] === 'Marzo' || array[i] === 'Noviembre') {
      array2.push(array[i])
    }
  }
  if (array2.length === 3){
    return array2;
  }else{
    return 'No se encontraron los meses pedidos';
  }
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var nuevoarray = [];

  for (i = 0; i< array.length;i++){
    if (array[i] > 100) nuevoarray.push(array[i])
  }
  return nuevoarray;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var aux = [];
  
  for( var i = 0; i < 10; i++){  // uso var para poder volver a usar el valor de i fuera del for
    numero = numero + 2
    if (numero === i){
      break;
    }else{
      aux.push(numero)
    }
  }
  if (i < 9) return "Se interrumpió la ejecución";// i === 9 xq comienza en 0 y para q sea 10 elementos tiene q terminar en 9 (0,1,2,3,4,5,6,7,8,9)
  
  return aux;
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var aux = [];
    for( var i = 0; i < 10; i++){  
    if (5 === i){
      continue;
    }else{
      numero = numero + 2
      aux.push(numero)
    }
  }  
  return aux;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  tablaDelSeis,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
