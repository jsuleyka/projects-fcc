//------------------------------ Conversor de números romanos --------------------------//
// Convierte el número proporcionado en un número romano.

// Números romanos	Números arábigos
// M	1000
// CM	900
// D	500
// CD	400
// C	100
// XC	90
// L	50
// XL	40
// X	10
// IX	9
// V	5
// IV	4
// I	1
// Todas las respuestas de los números romanos deben ser proporcionadas en mayúsculas.

// Esperando:convertToRoman(2) debe devolver la cadena II.
// Esperando:convertToRoman(3) debe devolver la cadena III.
// Esperando:convertToRoman(4) debe devolver la cadena IV.
// Esperando:convertToRoman(5) debe devolver la cadena V.
// Esperando:convertToRoman(9) debe devolver la cadena IX.
// Esperando:convertToRoman(12) debe devolver la cadena XII.
// Esperando:convertToRoman(16) debe devolver la cadena XVI.
// Esperando:convertToRoman(29) debe devolver la cadena XXIX.
// Esperando:convertToRoman(44) debe devolver la cadena XLIV.
// Esperando:convertToRoman(45) debe devolver la cadena XLV.
// Esperando:convertToRoman(68) debe devolver la cadena LXVIII
// Esperando:convertToRoman(83) debe devolver la cadena LXXXIII
// Esperando:convertToRoman(97) debe devolver la cadena XCVII
// Esperando:convertToRoman(99) debe devolver la cadena XCIX
// Esperando:convertToRoman(400) debe devolver la cadena CD
// Esperando:convertToRoman(500) debe devolver la cadena D
// Esperando:convertToRoman(501) debe devolver la cadena DI
// Esperando:convertToRoman(649) debe devolver la cadena DCXLIX
// Esperando:convertToRoman(798) debe devolver la cadena DCCXCVIII
// Esperando:convertToRoman(891) debe devolver la cadena DCCCXCI
// Esperando:convertToRoman(1000) debe devolver la cadena M
// Esperando:convertToRoman(1004) debe devolver la cadena MIV
// Esperando:convertToRoman(1006) debe devolver la cadena MVI
// Esperando:convertToRoman(1023) debe devolver la cadena MXXIII
// Esperando:convertToRoman(2014) debe devolver la cadena MMXIV
// Esperando:convertToRoman(3999) debe devolver la cadena MMMCMXCIX

function convertToRoman(num){ 
    let conversion = {
        M:1000,
        CM:900,
        D:500,
        CD:400,
        C:100,
        XC:90,
        L:50,
        XL:40,
        X:10,
        IX:9,
        V:5,
        IV:4,
        I:1
    }, romano = '';

    for(let i in conversion){ 
        while(num >= conversion[i]){ 
            romano += i;
            num -= conversion[i]; 
        } 
    } 
    return romano;
}

console.log(convertToRoman(36));