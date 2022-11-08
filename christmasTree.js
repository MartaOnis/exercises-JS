// ¡Es hora de poner el árbol de navidad en casa! 🎄

// Para ello vamos a crear una función que recibe la altura del árbol, que será un entero positivo del 1 a, como máximo, 100.

// Si le pasamos el argumento 5, se pintaría esto:

// ____*____
// ___***___
// __*****__
// _*******_
// *********
// ____#____
// ____#____
// Creamos un triángulo de asteriscos * con la altura proporcionada y, a los lados, usamos el guión bajo _ para los espacios. Es muy importante que nuestro árbol siempre tenga la misma longitud por cada lado.
// Todos los árboles, por pequeños o grandes que sean, tienen un tronco de dos líneas de #.

function createXmasTree(height) {
  // ¡Y no olvides también poner los turrones!
  let string = '';
  for (let i = 0; i < height; i++) {
    for (let x = 0; x < height - i - 1; x++) {
      string += '_';
    }
    for (let x = 0; x < (i + 1) * 2 - 1; x++) {
      string += '*';
    }
    for (let x = 0; x < height - i - 1; x++) {
      string += '_';
    }

    string += '\n';
  }
  for (let i = 0; i < 2; i++) {
    if (i === 1) string += '\n';
    for (let i = 0; i < height - 1; i++) {
      string += '_';
    }
    string += '#';
    for (let i = 0; i < height - 1; i++) {
      string += '_';
    }
  }
  return string;
}

console.log(createXmasTree(6));
