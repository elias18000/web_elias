modoOscuro.addEventListener("click", toggleDarkMode);

let modooscuroactivado = false;

function toggleDarkMode() {
    let cuerpo = document.querySelector('body');
    let footer = document.querySelector('footer');
    let buttons = document.querySelectorAll('button');

    cuerpo.classList.toggle('dark-mode');
    footer.classList.toggle('dark-mode');
    
    buttons.forEach(button => {
        button.classList.toggle('dark-mode');
    });

    modooscuroactivado = !modooscuroactivado;
    localStorage.setItem('ModoOscuroActivado', modooscuroactivado);
}

window.onload = () => {
    let savedMode = localStorage.getItem('ModoOscuroActivado');
    if (savedMode === 'true') {
        toggleDarkMode();
    }
};