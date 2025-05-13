// Pega os elementos do menu
const botaoMenu = document.getElementById('botaoMenu');
const menuMobile = document.getElementById('menuMobile');
const fecharMenu = document.getElementById('fecharMenu');

// Abre o menu quando clica no ☰
botaoMenu.addEventListener('click', function() {
    menuMobile.classList.add('active');
});

// Fecha o menu quando clica no ×
fecharMenu.addEventListener('click', function() {
    menuMobile.classList.remove('active');
});

// Fecha o menu quando clica em um link
const linksMenu = document.querySelectorAll('.menu-mobile a');
linksMenu.forEach(link => {
    link.addEventListener('click', function() {
        menuMobile.classList.remove('active');
    });
});