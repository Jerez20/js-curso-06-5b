//Jazael Jerez Marte #6 5b.
const saludar = (nombre) =>{
console.log('Creando etiqueta h1, en el HTML!');
//Comentario de una sola linea
//El codigo comentado no lee el interprete de JS.

/*
   Comentario de varias lineas.
   Uso del DOCUMENTO OBJECT MODEL (DOM)
   permite a JS modificar el HTML.
 */

  const h1 = documen.createElement('h1')
  h1.innerText = `Hola, ${nombre}`;

  document.body.append(h1);
}

const user = "Juancho";
saludar(user);