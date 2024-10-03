// Toogle class active untuk search form
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');

document.querySelector('#search-button').onclic = (e) => {
    searchForm.classList.toogle('active');
    searchBox.focus()
    e.preventDefault()
}