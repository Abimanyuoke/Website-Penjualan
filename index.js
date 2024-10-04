// Toggle class active untuk hamburger manu 
const navbarNav = document.querySelector('.navbar-nav');

// Ketika hamburger menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active')
}

// Toogle class active untuk produk
const shoppingCart = document.querySelector('.shoping-cart');
document.querySelector('#shopping-cart-button').onclick = (e) => {
    shoppingCart.classList.toggle('angga');
    e.preventDefault();
}

// Toggle class active untuk search form
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');

document.querySelector('#search-button').onclick = (e) => {
    searchForm.classList.toggle('abim');
    searchBox.focus();
    e.preventDefault();
}

// Klik di luar elemen
const hamburger = document.querySelector('#hamburger-menu');
const searchButton = document.querySelector('#search-button');
const shoppingButton = document.querySelector('#shopping-cart-button');

document.addEventListener('click', function(e) {
    if(hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }

    if(searchButton.contains(e.target) && !searchForm.contains(e.target)) {
        searchForm.classList.remove('abim');
    }

    if(shoppingButton.contains(e.target) && !shoppingCart.contains(e.target)) {
        shoppingCart.classList.remove('anggga');
    }
})