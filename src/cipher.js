window.cipher = {     /* Acá va tu código */
  encode: (text, intervalo) => { /*Texto corresponde al lo que se va ingresar en el input (son dos argumentos)*/

    let result = ' '; /* string vacio que corresponde a lo que va ingresar en el usuario*/

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
    }
    return result }}