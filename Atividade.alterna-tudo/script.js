const fontesGoogle = [
  'Roboto', 'Oswald', 'Lato', 'Montserrat', 'Poppins',
  'Open Sans', 'Raleway', 'Merriweather', 'Fira Sans', 'PT Sans',
  'Nunito', 'Kanit', 'Quicksand', 'Bebas Neue', 'Indie Flower'
];

function corRGBaleatoria() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}

function fonteAleatoria() {
  const idx = Math.floor(Math.random() * fontesGoogle.length);
  return fontesGoogle[idx];
}

function alterarCorFundo() {
  document.body.style.backgroundColor = corRGBaleatoria();
}

function alterarCorTitulo() {
  document.getElementById('titulo').style.color = corRGBaleatoria();
}

function alterarCorParagrafo() {
  document.getElementById('paragrafo').style.color = corRGBaleatoria();
}

function alterarFonteTitulo() {
  const fonte = fonteAleatoria();
  document.getElementById('titulo').style.fontFamily = `'${fonte}', Arial, sans-serif`;
}

function alterarFonteParagrafo() {
  const fonte = fonteAleatoria();
  document.getElementById('paragrafo').style.fontFamily = `'${fonte}', Arial, sans-serif`;
}

function alterarTudo() {
  alterarCorFundo();
  alterarCorTitulo();
  alterarCorParagrafo();
  alterarFonteTitulo();
  alterarFonteParagrafo();
}