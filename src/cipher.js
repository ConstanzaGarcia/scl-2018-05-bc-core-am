window.cipher = {
  encode: () => {
    /* Acá va tu código */

    const contador= mensaje_uno.length;
    /* mensajeuno*/
    const mensaje_dos = "";
    let letra = "";
    let ABC= 0;
    let i;
    let x;

    for (i = 0; i < contador; i++)
  {
      letra = mensaje_uno[i]
      result += (mensaje_uno.charCodeAt (i) - 65 + 33)%26 + 65;[i].toLocaleLowerCase ();
      mensaje_dos [i] = result
    }

/*    
      for (i = 0; i < contador; i++);
        mensaje_uno [i] = 
      abc = mensaje.charCodeAt(i);  /* le da los numeros a las letras, aqui llego 1era letras del mensaje */
/*
      x = (posicion - 65 -objet)%26 + 65; 

 



      
      {
        console.log(str[i]);
        ('esta es la interacción número: ' + i + ', letra: ' + str [i]);
        result += (str.charCodeAt (i) - 65 + 33)%26 + 65;[i].toLocaleLowerCase ();
      }


        }
       } 