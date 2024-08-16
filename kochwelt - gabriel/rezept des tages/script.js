function toggleMenu(){
    document.getElementById('menu').classList.toggle('d-none');
}


document.addEventListener('DOMContentLoaded', function() {
    const hamburgerIcon = document.getElementById('icon');
    const hamburgerMenu = document.getElementById('menu');
    const body = document.body;

    hamburgerIcon.addEventListener('click', function() {
        hamburgerMenu.classList.toggle('d-none'); 
        body.classList.toggle('menu-open'); 
    });
});