let contador = 0;
const contadorEl = document.getElementById('contador');
const btnAumentar = document.getElementById('aumentar');
const btnDiminuir = document.getElementById('diminuir');

btnAumentar.onclick = function() {
    contador++;
    contadorEl.textContent = contador;
};

btnDiminuir.onclick = function() {
    contador--;
    contadorEl.textContent = contador;
};