let menu = document.querySelector('#toggle-bar');
let navlist = document.querySelector('.fa-solid fa-bars" id="toggle-bar"');

menu.onclick = () => {
    menu.classList.toggle('fa-xmark');
    navlist.classList.toggle('active');
}