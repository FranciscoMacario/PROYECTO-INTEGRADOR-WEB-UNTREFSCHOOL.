const btnMenu = document.querySelector('#btn-menu');
const menuDesplegable = document.querySelector('#menu');
const navBar = document.querySelector('#nav-bar');
//

btnMenu.addEventListener('click', function() {
    if(menuDesplegable.className == 'menu hide-menu') {
        menuDesplegable.classList.remove('hide-menu');
        btnMenu.innerHTML = '<i class="fa-solid fa-xmark"></i>'
        progresiveHeightUp();
    } else {
        menuDesplegable.classList.add('hide-menu');
        btnMenu.innerHTML = '<i class="fa-solid fa-bars"></i>'
        progresiveHeightUp();
    }
});

function progresiveHeightUp() {
    if(navBar.classList == 'nav-bar ocultar-nav') {
        navBar.classList.remove('ocultar-nav');
        navBar.classList.add('mostrar-nav')
    } else {
        navBar.classList.remove('mostrar-nav');
        navBar.classList.add('ocultar-nav');
    }
    
}