document.getElementById('rotateButton').addEventListener('click', function () {
    const fenster = document.getElementById('fenster');

    if (fenster.classList.contains('open')) {
        fenster.style.transform = 'rotateX(90deg)';
        fenster.classList.remove('open');
        setTimeout(() => {
            fenster.style.display = 'none';
        }, 500);
    } else {
        // Menü öffnen
        fenster.style.display = 'flex';
        setTimeout(() => {
            fenster.style.transform = 'rotateX(0deg)';
        }, 1);
        fenster.classList.add('open');
    }
});
