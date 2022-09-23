//------------------------------------- Cifrado César ----------------------------------//
// Uno de los cifrados más simples y conocidos es el cifrado César, también conocido como 
// cifrado por desplazamiento. En un cifrado por desplazamiento los significados de las 
// letras se desplazan por una cantidad determinada.

// Un uso moderno común es el cifrado ROT13, donde los valores de las letras son 
// desplazados por 13 lugares. Así que A ↔ N, B ↔ O y así sucesivamente.

// Escribe una función que reciba una cadena codificada en ROT13 como entrada y devuelva 
// una cadena decodificada.

// Todas las letras estarán en mayúsculas. No transformes ningún carácter no alfabético 
// (espacios, puntuación, por ejemplo), pero si transmítelos.

// rot13("SERR PBQR PNZC") debe decodificarse en la cadena FREE CODE CAMP
// Esperando:rot13("SERR CVMMN!") debe decodificarse en la cadena FREE PIZZA!
// Esperando:rot13("SERR YBIR?") debe decodificarse en la cadena FREE LOVE?
// Esperando:rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.") debe decodificarse en 
// la cadena THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.

function rot13(str) {
	return str.split('').map(c=>{
		let mayus = (c === c.toUpperCase()) ? true : false;
        console.log(mayus);
		let valorEntero = c.toLowerCase().charCodeAt(0);
        console.log(valorEntero);
        
		if(valorEntero >= 97 && valorEntero <= 122)
			{
				const valorDesplazamiento = 13;
				
				if(valorEntero + valorDesplazamiento > 122)
					valorEntero = 97 + (valorEntero - 122) + valorDesplazamiento - 1;
				else
					valorEntero = valorEntero + valorDesplazamiento;
			}
	
			let cifrado = String.fromCharCode(valorEntero);
			return mayus ? cifrado.toUpperCase() : cifrado;
		}).join('');
}

console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));