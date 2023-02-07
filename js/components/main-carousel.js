// 1 acessar o janela (browser)
// 2 pegar html (documento)
// 3 pegar botao
// 4 saber que esta sendo clicado no botao

// 5 acessar a janela
// 6 pegar o HTML todo
// 7 pegar elements
// 8 Mover o elements para direita
// 9 

const btnRight = window.document.querySelector('.button-arrow.-right');
const btnLeft = window.document.querySelector('.button-arrow.-left');
const elements = window.document.querySelector('.elements');
let pixels = 100

btnRight.addEventListener('click', function() {
    pixels = pixels + 100;
    elements.style = `transform: translateX(${pixels}px)`;
});

btnLeft.addEventListener('click', function() {
    pixels = pixels - 100;
    elements.style = `transform: translateX(${pixels}px)`;
})