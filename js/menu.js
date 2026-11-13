lucide.createIcons();

const boton = document.querySelector('.hamburguesa');
const menu = document.querySelector('.menu');
boton.addEventListener('click', () => {
    menu.classList.toggle('abierto');
});
