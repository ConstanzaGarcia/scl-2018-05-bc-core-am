/* Llamando al numero de intervalo-llamando al boton uno que traera el mensaje */
const ascii = document.getElementById('botonuno').addEventListener('click', () => {
    let intervalo = document.getElementById('intervalo').value;
    let text = document.getElementById('encode').value;
    let result = window.cipher.encode(text, intervalo);
    document.getElementById('cajauno').innerHTML = result;
})

const asciidos = document.getElementById('botondos').addEventListener('click', () => {
    let intervalo = document.getElementById('intervalo').value;
    let textodos = document.getElementById('decode').value;
    let result2 = window.cipher.decode(textodos, intervalo);
    document.getElementById('cajados').innerHTML = result2;
})