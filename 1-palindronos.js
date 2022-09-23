//---------------------------- Comprobador de palíndromos -------------------------------//
// Devuelve true si la cadena proporcionada es un palíndromo. De lo contrario, devuelve 
// false.

// Un palíndromo es una palabra o frase que se escribe de la misma manera hacia adelante 
// y hacia atrás, ignorando la puntuación, mayúsculas, minúsculas y espaciado.

// Nota: Tendrás que eliminar todos los caracteres no alfanuméricos (puntuación, espacios 
// y símbolos) y convertir todo en mayúsculas o minúsculas para comprobar si hay 
// palíndromos.

// Pasaremos cadenas con formatos variables, como racecar, RaceCar y race CAR entre otros.

// También pasaremos cadenas con símbolos especiales, como 2A3*3a2, 2A3 3a2 y 2_A3*3#A2.

// Esperando:palindrome("eye") debe devolver un booleano.
// Esperando:palindrome("eye") debe devolver true.
// Esperando:palindrome("_eye") debe devolver true.
// Esperando:palindrome("race car") debe devolver true.
// Esperando:palindrome("not a palindrome") debe devolver false.
// Esperando:palindrome("A man, a plan, a canal. Panama") debe devolver true.
// Esperando:palindrome("never odd or even") debe devolver true.
// Esperando:palindrome("nope") debe devolver false.
// Esperando:palindrome("almostomla") debe devolver false.
// Esperando:palindrome("My age is 0, 0 si ega ym.") debe devolver true.
// Esperando:palindrome("1 eye for of 1 eye.") debe devolver false.
// Esperando:palindrome("0_0 (: /-\ :) 0-0") debe devolver true.
// Esperando:palindrome("five|\_/|four") debe devolver false.

function palindrome(str) {
  let newArray = str.toLowerCase().replace(/[^A-Za-z0-9+]/g, "");
  console.log(newArray);

  const strReversed = newArray
    // .trim()
    .split("")
    .reverse()
    .join("");
  
  console.log(strReversed);

  return strReversed === newArray ? true : false;
}
  
console.log(palindrome("A man, a plan, a canal. Panama"));