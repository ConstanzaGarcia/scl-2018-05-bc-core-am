/* Acá va tu código */
window.onload = function () {
    /* Llamando al numero de intervalo-llamando al boton uno que traera el mensaje */
     
    let intervalo = document.getElementById ("intervalo");
    let mensaje_uno = document.getElementById ("encode");
    let mensaje_dos= document.getElementById('decode');

    document.getElementById('botonuno').addEventListener('click', function encode() {
        document.getElementById('encode').innerHTML = window.cipher.encode(cajauno.value.toUpperCase(),
          Number(offset.value));
      })
      
      document.getElementById('botondos').addEventListener('click', function decode() {
        document.getElementById('decode').innerHTML = window.cipher.decode(cajados.value.toUpperCase(),
          Number(offset.value));
      })

}