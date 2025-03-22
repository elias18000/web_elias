const pokemons = [
    "sources/blastoise.png",
    "sources/Arceus.png",
    "sources/pikachu.png",
    "sources/Charizard.png",
    "sources/Rhyperior.png",
    "sources/Palkia.png",
    "sources/Dialga.png",

];

let i = 0;
let intervalo = 0; 

document.addEventListener("DOMContentLoaded", () => {
    const img = document.getElementById("imagen");
    const btnSiguiente = document.getElementById("btnDespues");
    const btnAnterior = document.getElementById("btnAntes");
    const btnAuto = document.getElementById("automatico");
    const btnPausa = document.getElementById("pausa");

    if (img && btnSiguiente && btnAnterior) {
        const actualizar = () => img.src = pokemons[i];
        btnSiguiente.onclick = () => { i = (i + 1) % pokemons.length; actualizar(); };
        btnAnterior.onclick = () => { i = (i - 1 + pokemons.length) % pokemons.length; actualizar(); };
        actualizar();

        /*------------------------------AUTO------------------------------*/
        const iniciarAutoPlay = () => {
            if (intervalo == 0) { 
                intervalo = setInterval(() => {i = (i + 1) % pokemons.length;
                actualizar();}, 1000); 
            }
        };
        const detenerAutoPlay = () => {
            clearInterval(intervalo);
            intervalo = 0;
        };
        btnAuto.onclick = iniciarAutoPlay; 
        btnPausa.onclick = detenerAutoPlay;
    }
});







