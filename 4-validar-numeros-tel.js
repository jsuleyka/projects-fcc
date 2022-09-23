//---------------------------- Validador de números telefónicos ------------------------//
// Devuelve true si la cadena pasada concuerda con un número de teléfono válido en 
// Estados Unidos.

// El usuario puede completar el campo del formulario de la forma que elija, siempre que 
// tenga el formato de un número estadounidense válido. Los siguientes ejemplos son de 
// formatos válidos para números estadounidenses (consulte las pruebas a continuación para
// otras variantes):

// 555-555-5555
// (555)555-5555
// (555) 555-5555
// 555 555 5555
// 5555555555
// 1 555 555 5555

// Para este desafío se te presentará una cadena como 800-692-7753 o 8oo-six427676;laskdjf.
// Tu trabajo es validar o rechazar el número de teléfono estadounidense basado en 
// cualquier combinación de los formatos proporcionados arriba. El código de área es 
// obligatorio. Si el código de país es proporcionado, debes confirmar que el código de 
// país es 1. Devuelve true si la cadena es un número de teléfono estadounidense valido; 
// de lo contrario devuelve false.

// telephoneCheck("555-555-5555") debe devolver un booleano.
// Esperando:telephoneCheck("1 555-555-5555") debe devolver true.
// Esperando:telephoneCheck("1 (555) 555-5555") debe devolver true.
// Esperando:telephoneCheck("5555555555") debe devolver true.
// Esperando:telephoneCheck("555-555-5555") debe devolver true.
// Esperando:telephoneCheck("(555)555-5555") debe devolver true.
// Esperando:telephoneCheck("1(555)555-5555") debe devolver true.
// Esperando:telephoneCheck("555-5555") debe devolver false.
// Esperando:telephoneCheck("5555555") debe devolver false.
// Esperando:telephoneCheck("1 555)555-5555") debe devolver false.
// Esperando:telephoneCheck("1 555 555 5555") debe devolver true.
// Esperando:telephoneCheck("1 456 789 4444") debe devolver true.
// Esperando:telephoneCheck("123**&!!asdf#") debe devolver false.
// Esperando:telephoneCheck("55555555") debe devolver false.
// Esperando:telephoneCheck("(6054756961)") debe devolver false.
// Esperando:telephoneCheck("2 (757) 622-7382") debe devolver false.
// Esperando:telephoneCheck("0 (757) 622-7382") debe devolver false.
// Esperando:telephoneCheck("-1 (757) 622-7382") debe devolver false.
// Esperando:telephoneCheck("2 757 622-7382") debe devolver false.
// Esperando:telephoneCheck("10 (757) 622-7382") debe devolver false.
// Esperando:telephoneCheck("27576227382") debe devolver false.
// Esperando:telephoneCheck("(275)76227382") debe devolver false.
// Esperando:telephoneCheck("2(757)6227382") debe devolver false.
// Esperando:telephoneCheck("2(757)622-7382") debe devolver false.
// Esperando:telephoneCheck("555)-555-5555") debe devolver false.
// Esperando:telephoneCheck("(555-555-5555") debe devolver false.
// Esperando:telephoneCheck("(555)5(55?)-5555") debe devolver false.
// Esperando:telephoneCheck("55 55-55-555-5") debe devolver false.
// Esperando:telephoneCheck("11 555-555-5555") debe devolver false.

function telephoneCheck(str) {
    const regex = /^(1\s|1|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/;
  
    // let strArray = str.split("")
    // console.log(str.charAt(0));
  
    if (regex.test(str)){
      return true;
    }else{
      return false;
    }
    
    // else{
    //   console.log("Código de área no es válido");
    //   return false;
    // }
  }
  
  console.log(telephoneCheck("555 555-5555"));