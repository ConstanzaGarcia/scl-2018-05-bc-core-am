window.cipher = {     /* Acá va tu código */
  encode: (text,intervalo) => {
    let result = " ";
      for (i = 0; i < text.length; i++) {

      let intervalo = (text.charCodeAt (i) - 65) - parseInt(intervalo) % 26+65;
      
      if (text.charCodeAt(i) === 32) {
        intervalo = "";
        result += "";
      }
      result += String.fromCharCode("intervalo");
    }
    return result;
  }
 } 