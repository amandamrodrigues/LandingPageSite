// Menu
const menu = document.querySelector('.menu');
const navMenu = document.querySelector('.nav-menu');

menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    navMenu.classList.toggle('ativo');
});

// Barra de pesquisa
document.addEventListener('DOMContentLoaded', function () {
    const pesquisaIcon = document.getElementById('pesquisaIcon');
    const pesquisaInput = document.getElementById('pesquisaInput');

    pesquisaIcon.addEventListener('click', function (event) {
        event.stopPropagation();
        pesquisaInput.classList.toggle('ativo');
        pesquisaInput.focus();
    });

    document.addEventListener('click', function () {
        pesquisaInput.classList.remove('ativo');
    });

    pesquisaInput.addEventListener('click', function (event) {
        event.stopPropagation();
    });
});
