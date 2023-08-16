const MenuEmail = document.querySelector('.Navbar-Email');
const DesktopMenu = document.querySelector('.Desktop-Menu');

MenuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu(){
    DesktopMenu.classList.toggle('inactive')
}