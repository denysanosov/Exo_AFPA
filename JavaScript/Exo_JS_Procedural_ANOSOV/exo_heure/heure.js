let heure;
let minutes;
let secondes;
let bouton = document.querySelector("#bouton");
let resultatHeure = document.querySelector("#resultatHeure");


function afficherHeure() {

    heure = document.querySelector("#heure").value;
    minutes = document.querySelector("#minutes").value;
    secondes = document.querySelector("#secondes").value;

    secondes++;

    if(secondes === 60) {
        secondes = 0;
        minutes++;

        if(minutes === 60) {
            minutes = 0;
            heure++;

            if(heure === 24) {
                heure = 0;
            }
        }
    }

    resultatHeure.innerHTML = `Dans une seconde il sera ${heure} : ${minutes} : ${secondes}`;
}

bouton.addEventListener("click", afficherHeure);