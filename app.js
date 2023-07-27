// function sumaTodosImpares(num) {
 // if(num % 2 === 0) {
 // return par; // es par
 // }
 // else {
 // return impar; // es impar
 // }
 // }
//}/ La funcion llamada 'sumaTodosImpares' recibe como argumento un array de enteros.
    // y debe devolver la suma total entre todos los numeros impares.
    // ej:
    // sumaTodosImpares([1, 5, 2, 9, 6, 4]) devuelve 1 + 5 + 9 = 15
  
    // Tu código aca: 
    function sumaTodosImpares(arr) {
      let suma = 0;
    
      for (const num of arr) {
    
        if (num % 2 !== 0) {
          // comprueba si el número es impar (si su residuo al dividir por 2 no es cero)
          suma += num;
          // Si el número es impar, lo suma a la variable "suma"
        }
      }
  //retorna la variable suma que contiene un ciclo for
      return suma;
    }
    const numeros = [1, 5, 2, 9, 6, 4]; //array de numeros
    const resultado7 = sumaTodosImpares(numeros);//con esta constante asigno el array de numeros al ciclo bucle
    console.log(resultado7);    
////-----------------------------------------------------------------------------------------------------------------------
//function stringMasLarga(str) 
//  // La función llamada 'stringMasLarga', recibe como argumento un frase (string) 'str'
//  // y debe devolver la palabra (string) más larga que haya en esa frase (Es decir el de mayor cantidad de caracteres)
//  // Ej:
//  // stringMasLarga('Ayer fui a pasear a una plaza') debe retornar 'pasear'
//  // stringMasLarga('Me gusta mucho javascript') debe retornar 'javascript'
//  // Tip: podes usar el metodo de String 'split'
//
//  // Tu código aca: 

const palabraMasLarga = str =>{
  let string = str.split (" ")//divide la cadena 
  let max = ""//asigno el metodo al bucle 
  for(let i = 0; i<string.length;i++){
    if(max.length < string [i].length){
      max = string[i]
    }
  }//busca el palabra con la mayor cantidad de caracteres
  return max //retorno la variable que contiene el bucle
}

 console.log (palabraMasLarga("Me gusta mucho javascript"))
console.log(palabraMasLarga("Ayer fui a pasear a una plaza"))

//----------------------------------------------------------------------------------------------------------------

//function estaOffline(usuarios, nombre) {
//  // La funcion llamada "estaOffline" recibe como argumento un array de objetos llamado 'usuarios' y un string llamada 'nombre'.
//  // cada objeto tiene una property 'nombre' que es un string y otra llamada 'online' que es un booleano.
//  // La función debe retornar true si el usuario se encuentra offline, de lo contrario false.
//  // ej:
//  // var usuarios = [
//  //     {
//  //       nombre: 'toni',
//  //       online: true
//  //     },
//  //     {
//  //       nombre: 'emi',
//  //       online: true
//  //     },
//  //     {
//  //       nombre: 'agus',
//  //       online: false
//  //     }
//  // ];
//  // estaOffline(usuarios, 'agus') retorna true
//  // estaOffline(usuarios, 'emi') retorna false
//}
//
//  // Tu código aca: 
function estaOffline(usuarios8, nombre){
   //creo un bucle que entra en la propiedad usuarios 
  for (let i = 0; i < usuarios8.length; i++){
      if (usuarios8[i].nombre === nombre){
          return!usuarios8 [i].online
      }//el bucle indica que si el valor es true retorne false
  }
  return false
  }
  
  var usuarios8 = [
      {
       nombre: 'toni',
     online: true
       },
       {
        nombre: 'emi',
          online: true
       },
        {
         nombre: 'agus',
          online: false
       }
         ];
     
  console.log (estaOffline(usuarios8,'toni'));
  console.log (estaOffline(usuarios8,'agus'));
  console.log (estaOffline(usuarios8,'emi'))
//  //-----------------------------------------------------------------------------------------------------------------------
//
//  function actividadesEnComun(persona1, persona2) {
//  // La funcion llamada 'actividadesEnComun' recibe como argumento dos arrays de actividades (strings) llamados 'persona1' y 'persona2'
//  // y debe devolver un array de strings con las actividades en comun ( aquellas que se repiten ) entre cada array.
//  // ej: persona1 = ['leer', 'comer', 'pasear', 'dormir', 'jugar']
//  //     persona2 = ['comer', 'dormir', 'futbol']
//  // actividadesEnComun(persona1, persona2) => ['comer', 'dormir']
//  // Tip: podes usar ciclos for anidados.
//  // Tu código aca:
function actividadesEnComun(persona1, persona2) {
  const actividadesComunes = [];//crea un constante que recibe como parametro un array vacio
for (const actividad of persona1) {
  // Recorre el primer array (persona1)
  if (persona2.includes(actividad)) {
    // Comprueba si la actividad (el valor actividad sirve como parametro) está en el segundo array (persona2)
    actividadesComunes.push(actividad);
      // Si hay alguna actividad en ambos arrays, lo separa con un nuevo array: actividadesComunes  
    }
  }
return actividadesComunes;
//retorna la constante para poder usarla  
}
const persona1 = ['leer', 'comer', 'pasear', 'dormir', 'jugar'];
const persona2 = ['comer', 'dormir', 'futbol'];
//le da el valor al array vacio 
const actividadesEnComunArray = actividadesEnComun(persona1, persona2);
//con una nueva constante activa el funcionamiento de la funcion 
console.log(actividadesEnComunArray); 
//}
////-----------------------------------------------------------------------------------------------------------------------
//
//function buscaDestruye(arreglo, num) {
//  // La funcion 'buscaDestruye' recibe como argumento un array de enteros 'arreglo' y un entero 'num'.
//  // Esta funcion tiene que eliminar los numeros del array que coincidan el numero recibido como argumento.
//  // La función debe retornar el array sin los números sacados.
//  // Ej: buscaDestruye([1, 2, 3, 4], 2) devuelve => [1, 3, 4]
//  // Nota: Si el numero se repite mas de una vez, tambien hay que eliminarlo.
//  // Ej: buscaDestruye([1, 2, 3, 4, 1], 1) devuelve => [2, 3, 4]
//  //
//  // Tu código aca:
// 
//
const array = [1,2,3,1,4,1]; ///da el array con un valor
const elemento = 1;//valor a eliminar
borrarRepetidos (array, elemento);//los junta
function borrarRepetidos (arr, elemen){

  let nuevoArreglo = arr.sort(); //ordena el array de menor a mayor
  let elementoSeleccionado = elemen;//iguala el valor a eliminar para asi poder utilizarlo
  console.log(nuevoArreglo);
  let indice = 0;
  let contador = 1;//las variables son para posicionar 
  for (let i = 0; i < nuevoArreglo.length; i++){
    if(nuevoArreglo[i] === nuevoArreglo[i+1]){
      contador++;
    }
  }//el bucle accede a la al array y lo recorre uno por uno comparando los valores
  //y cuenta cuantos elementos se repiten 

console.log(contador)

indice = nuevoArreglo.indexOf(elementoSeleccionado); //busca los elementos repetidos
nuevoArreglo.splice(indice,contador);//los elimina
return nuevoArreglo;
}
console.log(array)
//}
////-----------------------------------------------------------------------------------------------------------------------
//
//function sumaDeArrays(array) {
//    // El array recibido por parametro es un array multidimencional con array's que 
//    //contienen elementos de tipo number
//    // Tienen que devolver UN SOLO array que solo contenga elementos de tipo number
//    // Sumando los elementos de cada array que contenga dos elementos,
//    // y devolviendo la suma del mismo
//    // OJO: Si el elemento dentro del array que ingresa por prop, 
//    //ya es de tipo number, deben devolverlo como tal dentro del array que retornan.
//    //let a = [[5, 5], 4, [10, 15], [25, 10]]. 
function sumaDeArrays(array) {
  const resultArray = [];// asigna el parametro de array a la constante
  array.
forEach(element => {
    if (Array.isArray(element) && element.length === 2) {//indica que el elemento debe tener 2 numeros 
      const sum = element.reduce((acc, val) => acc + (typeof val === "number" ? val : 0), 0);
      resultArray.push(sum);
    }    
else if (typeof element === "number") {
      resultArray.
     
push(element);
    }
  });
//reduce el array a elementos de type number
return resultArray;
}

const a = [[5, 5], 4, [10, 15], [25, 10]]; //asigna un valor al array 
const resultado = sumaDeArrays(a);// lo devuelve con la propiedad del bucle
console.log(resultado); 
  
//};
////-----------------------------------------------------------------------------------------------------------------------
//
//function mismoValorMismosElementos(numero, divisor) {
//    // Tiene que devolver un array con la misma cantidad de elementos que el valor del divisor
//    // Todos los elementos deben tener el mismo valor
//    // OJO: Si el resultado de la division no es un entero, deben devolver false
function mismoValorMismosElementos(numero, divisor) {
  const resultadoDivision = numero / divisor; 
   
  if (!Number.isInteger(resultadoDivision)) {
// Verifica si el resultado de la división es un número entero
      return false;
  }
  const resultArray = new Array(divisor).fill(resultadoDivision);
  return resultArray
}    //modifica el array en nuevo array que divide el resultado en tres 
  
  let numero = 15;
  let divisor = 3; //valores de los parametros
  const resultadoFinal = mismoValorMismosElementos(numero, divisor);

  console.log(resultadoFinal); 
//};  
//
////-----------------------------------------------------------------------------------------------------------------------
//
//
//function map(array, cb) {
//  // Crea un nuevo array
//  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
//  // El nuevo array debe tener la misma longitud que el array del argumento
//  //Tu código: 
function map(array, cb) {
  const newArray = []; //a la constante se le asigna el parametro  del array
  for (let i = 0; i < array.length; i++) { //el bucle recorre el array
  const newValue = cb(array[i]);
      newArray. 
  push(newValue);
    }//la cosntante mueve el array hacia cb que es igual a newValue 
  return newArray;
} 
  // Ejemplo de uso
  const originalArray = [1, 2, 3, 4, 5];//los valoress del array
  const mappedArray = map(originalArray, (value) => value * 2); //nuevo array pero multiplicado por 2 cada valor
  console.log(mappedArray); 
//}
//
////-----------------------------------------------------------------------------------------------------------------------
//
//
//function filter(array) {
//  //Filtrar todos los elementos del array que comiencen con la letra "a".
//  //Devolver un nuevo array con los elementos que cumplen la condición
//  //Tu código:
//  
//  }

const filter = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
//array con valores ya declarados 
const sacarLetra = "J";//constante que selecciona la letra como parametro a usar 

const letras = sacarLetra.split(""); //divides las letras individualmente
const filtrado = filter.filter(mes => { //filtras los valores del array
  for(letra of letras){ //recorre las letras
    if(mes.indexOf(letra) !== -1) //Chequea si la letra está dentro de la palabra
      return true;
  } 
  return false;
});
console.log(filtrado)






////-----------------------------------------------------------------------------------------------------------------------
//
//
//function sumarElTipo(arreglo) {
//  // La funcion llamada 'sumarElTipo' recibe un array de strings como argumento
//  // que contiene tipos de vehiculos y debe devolver un objeto con la cantidad
//  // de veces que se repita cada tipo.
//  // El objeto que devuelve tiene como propiedades el nombre de cada vehiculo y su valor es la cantidad de veces que se repite.
//  // Ej:
//  // sumarElTipo(['auto', 'moto', 'auto']); debe retornar {auto: 2, moto: 1}
//  // Tip: podes usar el ciclo for o el metodo de Array 'reduce'
//
//  // Tu código aca: 
function sumarElTipo(arreglo) {
  const contador = {};         
  for (let i = 0; i < arreglo.length; i++) {  //recorre el array
  const vehiculo = arreglo[i];  //accede al bucle para poder cambiar al array original           
  if (contador[vehiculo]) {//   
        contador[vehiculo]++;//recorre el array y da como parametro un conteo 
      }else {   contador[vehiculo] = 1;
      }
 } return contador;
      }     
  
  const vehiculos = ['auto', 'moto', 'auto'];//da el valor del array
  const conteo = sumarElTipo(vehiculos);//igual la funcion para quue se active 
  console.log(conteo); 
 
//
//
//  function crearGato(nombre, edad) {
//  // Crear un nuevo objeto con la propiedad "nombre" y el valor definido como el argumento "nombre".
//  // Agrega una propiedad al objeto con el nombre "edad" y usa el valor definido en el argumento "edad"
//  // Agrega un método (funcion) llamado "meow" que devuelva el string "Meow!"
//  // Devuelve el objeto
//  // Tu código: 
function crearGato(nombre, edad) {
  const gato = {    //las propiedades del objeto           
nombre: nombre,       
edad: edad,       
meow: function() {           
return "Meow!";  //metodo function 
  }
};
 return gato;                                      
}

const miGato = crearGato("Felix", 3);
console.log(miGato.nombre); 
console.log(miGato.edad); 
console.log(miGato.meow());  

// 
//}
//
//
//function agregarPropiedad(objeto, property) {
//  // Agrega una propiedad al objeto (argumento "objeto") con el valor `null`
//  // Devuelve el objeto 
//  // NOTA: El nombre de la propiedad no es "propiedad", el nombre es el valor del argumento llamado "property" (una cadena/string)
//  // Tu código: 
//  //objeto [property]= null;  
function agregarPropiedad(objeto, property) {
  objeto[property] = null;
return objeto;//al parametro objeto se le indica que la property va a ser null
}

const miObjeto = { nombre: "Juan", edad: 30 };//da valores al nuevo objeto 
agregarPropiedad(miObjeto, "trabajo");//se le asigna al objeto los valores del nuevo objeto 
console.log(miObjeto);                //pero a la vez se le asigna un valor a la property en forma de string que va a ser null
//} 
//
//function invocarMetodo(objeto, metodo) {
//  // "metodo" es una cadena que contiene el nombre de un método (funcion) en el objeto
//  // Invoca ese método
//  // Nada necesita ser devuelto ("returned")
//  // Tu código: OJOOOOOOOOOOOO
function invocarMetodo(objeto, metodo) {
  objeto[metodo]();
}//mete metodo dentro de objeto para poder hacer una funcion dentro 
const miObjetoo = {
  saludar: function() {//declara la funcion dentro que va dentro del metodo
    console.log("¡Hola desde el método saludar!");
  }
};
invocarMetodo(miObjetoo, "saludar"); //llama la funcion pero usando la constante como propiedad en vez de los parametro originales
// 
//
//}
//
// 
//
//function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
//  // "objetoMisterioso" tiene una propiedad llamada "numeroMisterioso"
//  // Multiplica el numeroMisterioso por 5 y devuelve el producto
//  // Tu código:
function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
  const producto = objetoMisterioso.numeroMisterioso * 5;
    return producto;//crea la funcion y le da el parametro y ademas le imdica al parametro que va a ser multiplicado por 5
  }

  const miObjetoP = { numeroMisterioso: 10
  };//le da valor al parametro 
  const resultadoP = multiplicarNumeroDesconocidoPorCinco(miObjetoP);//iguala la funcion con un paramatro que ya tiene un valor declarado
  console.log(resultadoP); 
//}
//
//function eliminarPropiedad(objeto, unaPropiedad) {
//  // Elimina la propiedad de objeto cuyo nombre está pasado por el parametro unaPropiedad 
//  // tip: tenes que usar bracket notation = Notacion de corchetes. 
//  // Devuelve el objeto 
//  // Tu código:
function eliminarPropiedad(objeto, unaPropiedad) {
  delete objeto[unaPropiedad]; //crea una funcion que elimina un parametro 
  return objeto;
  }
  const miObjetoL = {   
  nombre: "Juan", 
  edad: 30,   //los valores del objeto
  trabajo: "Desarrollador"
  };
  eliminarPropiedad(miObjetoL, "trabajo"); //junta el objeto con la funcion y le asigna la propiedad que va a eliminar la funcion 
  console.log(miObjetoL);  
//
//}
//
//
//function nuevoUsuario(nombre, email, password) {
//  // Crea un nuevo objeto con las propiedades coincidiendo con los 
//  // argumentos que se pasan a la función
//  // Devuelve el objeto
//  // Tu código:
function nuevoUsuario(nombre, email, password) {//parametros de la funcion 
  const usuario = {  
  nombre: nombre,   
  email: email,///valores del objeto 
  password: password
    };
  return usuario;
    };  
  // 
  const usuario = nuevoUsuario("Juan", "juan@example.com", "secreto123"); //iguala la funcion con el objeto
  console.log(usuario); 
//}
//
//function tieneEmail(usuario) {
//  // Devuelve "true" si el usuario tiene un valor definido para la propiedad "email"
//  // De lo contratio, devuelve "false"
//  // Tu código
function tieneEmail(usuario) {
  return typeof usuario.email !== "undefined";// declara que si el valor contiene la propiedad "email" sea lo contrario a "undefined"
}
const usuario1 = { nombre: "Juan", email: "juan@example.com" };//da valores 
const usuario2 = { nombre: "María" };
console.log(tieneEmail(usuario1)); 
console.log(tieneEmail(usuario2));   
//} 
//
//
//function tienePropiedad(objeto, propiedad) {
//  // Devuelve "true" si el objeto (parámetro "objeto") tiene una propiedad (key) 
//  //cuyo nombre es igual al valor del argumento "propiedad"
//  // "propiedad" es un string
//  // De lo contrario, devuelve "false"
//  // Tu código:
///REVISAR-------------------------------------------------------------
function tienePropiedad(objeto, propiedad) {
  return propiedad in objeto; //comprueba si el objeto "objeto" tiene una propiedad "propiedad" 
}
const miObjetot = {
nombre: "Juan",   //da valores al objeto
edad: 30, 
ciudad: "Madrid"
};
console.log(tienePropiedad(miObjeto, "nombre")); 
console.log(tienePropiedad(miObjeto, "apellido"));
//}
//
//function verificarPassword(usuario, password) {
//  // Comprueba si la "password" enviada coincide con la propiedad "password" del objeto "usuario"
//  // Devuelve "true" si coinciden
//  // De lo contrario, devuelve "false"
//  // // Tu código: 
function verificarPassword(usuario, password) {
  // Comprueba si el objeto "usuario" tiene una propiedad "password"
  if ("password" in usuario) {     
  // Compara la "password" enviada con la propiedad "password" del objeto "usuario"     
  return usuario.password === password;
    }  
  else {       
  // Si el objeto "usuario" no tiene una propiedad "password", devuelve "false"
      return false;
    }
  }
  const usuario3 = {
    nombre: "Juan",   //da valores al objeto 
  password: "secreto123"
  };
  console.log(verificarPassword(usuario3, "secreto123")); 
  console.log(verificarPassword(usuario3, "contraseña")); 
   
//}
//
//function actualizarPassword(usuario, nuevaPassword) {
//  // Reemplaza la contraseña existente en el objeto "usuario" con el valor de "nuevaPassword"
//  // Devuelve el objeto
//  // Tu código:
//
function actualizarPassword(usuario, nuevaPassword) {
  // Actualiza la contraseña del objeto "usuario" con el valor de "nuevaPassword"
  usuario = "Claudio"
  password = nuevaPassword;
  // Devuelve el objeto actualizado   
  return usuario;
  }
  const usuario4 = {
nombre: "Juan", //da valor al objeto
password: "secreto123"
    };
    console.log(usuario4); 
    actualizarPassword(usuario4, "nuevaContraseña456"); //le da un nuevo valor a la propiedad "password"
    console.log(usuario4); 
//}
//
//function agregarAmigo(usuario, nuevoAmigo) {
//  // "usuario" tiene una propiedad llamada "amigos" que es un array
//  // Agrega "nuevoAmigo" al final de ese array
//  // Devuelve el objeto "usuario"
//  // // Tu código: 
function agregarAmigo(usuario, nuevoAmigo) {
  // Verifica si el objeto "usuario" tiene una propiedad "amigos" que sea un array 
  if (!Array.isArray(usuario.amigos)) {   
  // Si no existe la propiedad "amigos" o no es un array, crea una nueva propiedad "amigos" con un array vacío
      usuario.  
  amigos = [];
    }
  // Agrega "nuevoAmigo" al final del array "amigos"
    usuario.
  amigos.push(nuevoAmigo);        
  // Devuelve el objeto "usuario" actualizado   
  return usuario;
  }
  const usuario5 = {
    nombre: "Juan", //da valores al objeto 
    amigos: ["María", "Pedro"]
  };
  console.log(usuario5);
  agregarAmigo(usuario5, "Ana");
  console.log(usuario5);
//}
//
//function pasarUsuarioAPremium(usuarios) {
//  // "usuarios" es un array de objetos "usuario"
//  // Cada objeto "usuario" tiene la propiedad "esPremium"
//  // Define cada propiedad "esPremium" de cada objeto como "true"
//  // Devuelve el  array de usuarios
//  // Tu código: 
function pasarUsuarioAPremium(usuariosl) { 
  // Recorremos el array "usuarios" usando un bucle for o forEach  
  for (let i = 0; i < usuariosl.length; i++) {   
  // Definimos la propiedad "esPremium" de cada objeto usuario como "true"
      usuariosl[i].esPremium = true;
    }  
    return usuariosl;
    }
    const usuariosl = [
      { //da los valores 
     nombre: "Juan", esPremium: false },      
     {
    nombre: "María", esPremium: false },  
     {
    nombre: "Pedro", esPremium: false }
    ];
    console.log(usuariosl); 
   
  // Devolvemos el array de usuarios actualizado  
//}
//
//function sumarLikesDeUsuario(usuario) {
//  // "usuario" tiene una propiedad llamada "posts" que es un array
//  // "posts" es un array de objetos "post"
//  // Cada objeto "post" tiene una propiedad llamada "likes" que es un entero (int/integer)
//  // Suma todos los likes de todos los objetos "post"
//  // Devuelve la suma
//  // Tu código: 
function sumarLikesDeUsuario(usuario10) {   
  // Comprueba s si el usuario tiene la propiedad "posts" y si es un array           
  if (usuario10 && usuario10.posts && Array.isArray(usuario10.posts)) {               
  let totalLikes = 0;                              
  // Recorre todos los objetos "post" del array    
  for (const post of usuario10.posts) {               
  // Comprueba si cada objeto "post" tiene la propiedad "likes" y si es un número               
  if (post.likes && typeof post.likes === "number") {                   
  // Suma los likes de cada post al totalLikes
          totalLikes += post.likes;
        }
      }     return totalLikes;   
        }
       
      }                        
const usuario10 = {
      posts: [
          {    
      likes: 10 },
          {  
      likes: 5 },
          {  
      likes: 8 },                       
      //  objetos "post" con sus respectivos "likes"
        ]
      };                         
      const totalLikesUsuario10 = sumarLikesDeUsuario(usuario10);
      console.log(totalLikesUsuario10); // Mostrará la suma de los likes de todos los posts del usuario        
//}
//
//function agregarMetodoCalculoDescuento(producto) {
//  // Agregar un método (función) al objeto "producto" llamado "calcularPrecioDescuento"
//  // Este método debe multiplicar el "precio" del "producto" ("producto.precio" o "producto[precio]") y "porcentajeDeDescuento" para obtener el descuento
//  // El método resta el descuento del precio y devuelve el precio con descuento
//  // Devuelve el objeto "producto" al final de la función
//  // Ejemplo:
//  // producto.precio -> 20
//  // producto.porcentajeDeDescuento -> 0.2 (o simplemente ".2")
//  // producto.calcularPrecioDescuento() -> 20 - (20 * 0.2)
//  // Tu código: 
//}
function agregarMetodoCalculoDescuento(producto) {
  // Comprueba si el objeto "producto" tiene las propiedades "precio" y "porcentajeDeDescuento"
  if (producto && typeof producto.precio === "number" && typeof producto.porcentajeDeDescuento === "number") {
    // Agregamos el método "calcularPrecioDescuento" al objeto "producto"
    producto.calcularPrecioDescuento = function() {
      // Calcula el descuento
      const descuento = producto.precio * producto.porcentajeDeDescuento;

      // Resta el descuento al precio y devolvemos el precio con descuento
      return producto.precio - descuento;
    };
  }

  return producto;
}
const miProducto = {
  precio: 20,
  porcentajeDeDescuento: 0.2
};

agregarMetodoCalculoDescuento(miProducto);

console.log(miProducto.calcularPrecioDescuento()); // Mostrará el precio con el descuento aplicado
//
////-------------------------------------------Interacción con el DOM--------------------------------------------------------
//// En la página 'index.html' hay un elemento span cuyo texto es 'Aplicación creada por:'.
//// Usando querySelector seleccionar dicho span por su id ('createdBy') y luego usando innerHTML
//// agregar tu nombre al final del texto actual. Ej: 'Aplicación creada por Franco'
//// Tu código acá: 
//
////-----------------------------------------------------------------------------------------------------------------------
//
//// La función debe realizar lo siguiente:
////    1) Crear un elemento 'div' y asignárselo a una variable denominada 'toDoShell'
////    2) Asignarle a 'toDoShell' la clase 'toDoShell'
////    3) Crear un elemento 'span' y asignárselo a una variable denominada 'toDoText'
////    4) Utilizando el objeto toDo pasado como argumento, setear el 'toDoText' innerHTML
////       asignándole el valor de la propiedad 'description' del objeto ToDo.
////    5) Asignarle como id del 'toDoText' el valor 'index' recibido como argumento
////    6) En función del atributo 'complete' del objeto ToDo recibido como argumento:
////          - Si es true: asignarle a 'toDoText' la clase 'completeText'
////          - Si es false: no asignarle ninguna clase
////    7) Agregar 'toDoText' como hijo de 'toDoShell'
////    8) Devolver la variable toDoShell

//
//function buildToDo(todo, index) { //todo es un objeto de la clase TODO. //index numerico 
//  // Tu código acá:
// 
//  // Consigna 3
// 
//  // Consigna 4
//  
//  // Consigna 5
// 
//  // Consigna 6
// 
//  // Consigna 7
//  
//  // Consigna 8
//  
//
//}
//
////-----------------------------------------------------------------------------------------------------------------------
//
//// La función 'displayToDos' se va a encargar de que se vean los toDo's en pantalla
////  1) Seleccionr el elemento cuyo id es 'toDoContainer' y almacenarlo en una variable denominada 'toDoContainer'
////  2) Setear el innerHTML de 'toDoContainer' como un string vacio ("")
////  3) Llamar a la función previemante creada 'buildToDos' pasándole como argumento el array toDoItems
////  4) Iterar sobre el resultado devuelto por la función 'buildToDos' e ir agregndo cada elemento a 'toDoContainer'
////  5) Al final de este archivo, escribe una línea para hacer el llamado a esta funcion (displayToDos)
////  6) Abrir o en el caso de ya tenerlo abierto, recargar, la página
//
//function displayToDos() {
//// Tu código acá:
////Paso 1; 
// 
//// Paso 2: 
//  
//// Paso 3;
//
// //Paso 4; 
//
// 
//
//}; 
//
////-----------------------------------------------------------------------------------------------------------------------