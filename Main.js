const MenuEmail = document.querySelector('.Navbar-Email');
const DesktopMenu = document.querySelector('.Desktop-Menu');

const HamburgerMenu = document.querySelector('.Menu');
const MobileMenu = document.querySelector('.Mobile-Menu');

const NavbarShoppingCard = document.querySelector('.Navbar-Shopping-Card');
const ProductDetails = document.querySelector('.Product-Details');

const cardsContainer = document.querySelector('.Cards-Container');

const productDetailsSecondary = document.querySelector('.Product-Details-Secondary')

MenuEmail.addEventListener('click', toggleDesktopMenu);
HamburgerMenu.addEventListener('click', toggleMobileMenu)
NavbarShoppingCard.addEventListener('click', toggleShoppingCard)

function toggleDesktopMenu(){
    const isProductDetailsClosed = ProductDetails.classList.contains('inactive');

    if(!isProductDetailsClosed){
        ProductDetails.classList.add('inactive');
    }

    const isProductDetailSecondaryClosed = productDetailsSecondary.classList.contains('inactive');
    if(!isProductDetailSecondaryClosed){
        productDetailsSecondary.classList.add('inactive');
    }

    DesktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isProductDetailsClosed = ProductDetails.classList.contains('inactive');

    if(!isProductDetailsClosed){
        ProductDetails.classList.add('inactive');
    }

    const isProductDetailSecondaryClosed = productDetailsSecondary.classList.contains('inactive');
    if(!isProductDetailSecondaryClosed){
        productDetailsSecondary.classList.add('inactive');
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
    
    const isProductDetailSecondaryClosed = productDetailsSecondary.classList.contains('inactive');
    if(!isProductDetailSecondaryClosed){
        productDetailsSecondary.classList.add('inactive');
    }

    ProductDetails.classList.toggle('inactive');
}

function openProductDetailAside(index){
    const isDesktopMenuClosed = DesktopMenu.classList.contains('inactive');

    if(!isDesktopMenuClosed){
        DesktopMenu.classList.add('inactive');
    }

    const isProductDetailsClosed = ProductDetails.classList.contains('inactive');

    if(!isProductDetailsClosed){
        ProductDetails.classList.add('inactive');
    }

    const isMobileMenuClosed = MobileMenu.classList.contains('inactive');

    if(!isMobileMenuClosed){
        MobileMenu.classList.add('inactive');
    }

    productDetailsSecondary.classList.remove('inactive');

    const selectedProduct = productList[index];
    console.log(index);
    console.log(selectedProduct.name);
    console.log(selectedProduct.price);

    renderProductsDetails(selectedProduct);
}

const productList = [];
productList.push ({
    name:'Bike',
    price: 12700,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    description: 'This is a bike'
});
productList.push ({
    name:'Bicycle helmet',
    price: 1200,
    image: 'https://assets.specialized.com/i/specialized/60821-104_HLMT_ALIGN-II-HLMT-MIPS-CE-BLK-BLKREFL-S-M_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto',
    description: 'This is a bicycle helmet'
});
productList.push ({
    name:'Bicycle helmet',
    price: 1600,
    image: 'https://m.media-amazon.com/images/I/61eExL-rIAL._AC_SL1001_.jpg',
    description: 'This is a bicycle helmet'
});
productList.push ({
    name:'Bicycle helmet',
    price: 1500,
    image: 'https://assets.specialized.com/i/specialized/60822-140_HLMT_CHAMONIX-HLMT-MIPS-CE-MRN-M-L_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto',
    description: 'This is a bicycle helmet'
});
productList.push ({
    name:'Seat',
    price: 300,
    image: 'https://m.media-amazon.com/images/I/61e+sZ9rgNL._AC_SL1500_.jpg',
    description: 'This is a bicycle seat'
});
productList.push ({
    name:'Tennis Mountain Bike',
    price: 2200,
    image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8ea578f6c07847fca2d0ac85011d7f1f_9366/Tenis_para_Mountain_Bike_Five_Ten_Freerider_Negro_FW2835_01_standard.jpg',
    description: 'This is a Tennis Mountain Bike'
});
productList.push ({
    name:'Sunglasses',
    price: 800,
    image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/gafas-siroko-tech-k3s-london-lateral/1200x/crop_center.jpg?v=1635209602',
    description: 'These are Sunglasses'
});
productList.push ({
    name:'Sunglasses',
    price: 600,
    image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/siroko-tech-k3s-clearfog-lente-antiniebla-frontal/1200x/crop_center.jpg?v=1635209603',
    description: 'These are Sunglasses'
});
productList.push ({
    name:'Bicycle seat bag',
    price: 876,
    image: 'https://m.media-amazon.com/images/I/81k2Gmal+VL._AC_SL1500_.jpg',
    description: 'These are bicycle seat bags'
}); 



function renderProducts(arr){
    productList.forEach((product, index) =>{
        const productCard = document.createElement('div');
        productCard.classList.add('Product-Card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', () => {openProductDetailAside(index);});

        const productInfo = document.createElement('div');
        productInfo.classList.add('Product-Info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
    
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    });
};

function renderProductsDetails(selectedProduct){
    const productDetailCloseSecondary = document.createElement('div');
    productDetailCloseSecondary.classList.add('Product-Detail-Close-Secondary');
    
    const closeProductImg = document.createElement('img');
    closeProductImg.setAttribute('src', './icons/icon_close.png');
    closeProductImg.addEventListener('click', closeProductDetailAside);

    const productImg = document.createElement('img');
    productImg.setAttribute('src', selectedProduct.image);

    const productInfoSecondary = document.createElement('div');
    productInfoSecondary.classList.add('Product-Info-Secondary');

    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + selectedProduct.price;

    const productName = document.createElement('p');
    productName.innerText = selectedProduct.name;

    const productDescription = document.createElement('p');
    productDescription.innerText = selectedProduct.description;

    productInfoSecondary.appendChild(productPrice);
    productInfoSecondary.appendChild(productName);

    const primaryButtonAddToCartButton = document.createElement('button');
    primaryButtonAddToCartButton.classList.add('Primary-Button')
    primaryButtonAddToCartButton.classList.add('Add-To-Cart-Button')

    const imgAddToCart = document.createElement('img');
    imgAddToCart.setAttribute('src', './icons/bt_add_to_cart.svg');

    const buttonText = document.createElement('p');
    buttonText.innerText = 'Add to cart';

    primaryButtonAddToCartButton.appendChild(imgAddToCart);

    productInfoSecondary.appendChild(productPrice);
    productInfoSecondary.appendChild(productName);
    productInfoSecondary.appendChild(productDescription);

    productDetailCloseSecondary.appendChild(closeProductImg);

    productDetailsSecondary.appendChild(productDetailCloseSecondary);
    productDetailsSecondary.appendChild(productImg);
    productDetailsSecondary.appendChild(productInfoSecondary);
    productDetailsSecondary.appendChild(primaryButtonAddToCartButton);

    function closeProductDetailAside(){
        productDetailCloseSecondary.remove();
        productImg.remove();
        productInfoSecondary.remove();
        primaryButtonAddToCartButton.remove();
        productDetailsSecondary.classList.add('inactive');
    }
}

renderProducts(productList);
