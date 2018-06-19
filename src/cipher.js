window.cipher = {     /* Acá va tu código */
  encode: (text, intervalo) => { /*Texto corresponde al lo que se va ingresar en el input (son dos argumentos)*/

    let result = ''; /* string vacio que corresponde a lo que va ingresar en el usuario*/

    /*el for va a recorrer el texto y va a tomar la longitud con el punto net*/
    for (let i = 0; i < text.length; i++) {

      let ascii = text.charCodeAt(i); /* obtiene el valor ascii*/
      /* que la variable que buscal al codigo ascii es 32 el str vacio sume un espacio*/
      if (ascii === 32) {
        result += ' ';
      }

      /* va en doble parentesis porque va evaluando dos cosas- tienen que ser ambas condiciones verdaderas para que tome lo demás*/
      if ((ascii >= 65) && (ascii <= 90)) {

        /*toma el valor de ascii y lo pasa a las letras a traves del string */
        let cifrar = (ascii - 65 + parseInt(intervalo)) % 26 + 65;

        /* ese string vacio le esta como resultado la letra de arriba*/
        result += String.fromCharCode(cifrar);
      }

      if ((ascii >= 97) && (ascii <= 122)) { //con minusculas en ascii
        let cifrar = (ascii - 65 + parseInt(intervalo)) % 26 + 65;
        result += String.fromCharCode(cifrar);
      }

    }
    return result;

  },

  decode: (textodos, intervalo) => {
    let result2 = '';
    for (let i = 0; i < textodos.length; i++) {
      let asciidos = textodos.charCodeAt(i);
      if (asciidos === 32) {
        result2 += ' ';
      }
      if ((asciidos >= 65) && (asciidos <= 90)) {
        let decifrar = (asciidos - 90 + parseInt(intervalo)) % 26 + 90;
        result2 += String.fromCharCode(decifrar);
      }
      if ((asciidos >= 97) && (asciidos <= 122)) { //con minusculas en ascii
        let decifrar = (ascii - 122 + parseInt(intervalo)) % 26 + 122;
        result2 += String.fromCharCode(decifrar);
      }

    }

    return result2;
  },
}