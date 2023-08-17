const MenuEmail = document.querySelector('.Navbar-Email');
const DesktopMenu = document.querySelector('.Desktop-Menu');

const HamburgerMenu = document.querySelector('.Menu');
const MobileMenu = document.querySelector('.Mobile-Menu');

const NavbarShoppingCard = document.querySelector('.Navbar-Shopping-Card');
const ProductDetails = document.querySelector('.Product-Details');

MenuEmail.addEventListener('click', toggleDesktopMenu);
HamburgerMenu.addEventListener('click', toggleMobileMenu)
NavbarShoppingCard.addEventListener('click', toggleShoppingCard)

function toggleDesktopMenu(){
    const isProductDetailsClosed = ProductDetails.classList.contains('inactive');

    if(!isProductDetailsClosed){
        ProductDetails.classList.add('inactive');
    }

    DesktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isProductDetailsClosed = ProductDetails.classList.contains('inactive');

    if(!isProductDetailsClosed){
        ProductDetails.classList.add('inactive');
    }

    MobileMenu.classList.toggle('inactive');
}

function toggleShoppingCard(){
    const isDesktopMenuClosed = DesktopMenu.classList.contains('inactive');
    const isMobileMenuClosed = MobileMenu.classList.contains('inactive');

    if(!isMobileMenuClosed){
        MobileMenu.classList.add('inactive');
    }

    if(!isDesktopMenuClosed){
        DesktopMenu.classList.add('inactive');
    }

    ProductDetails.classList.toggle('inactive');
}