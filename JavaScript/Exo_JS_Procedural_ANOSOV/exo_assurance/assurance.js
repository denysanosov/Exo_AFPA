let age;
let anciennetePermis;
let nbrAccidents;
let ancienneteAssurance;
let pointMalus;

let bouton = document.querySelector("#bouton");
let resultatAssurance = document.querySelector("#resultatAssurance");

function calculTarif() {

    age = document.querySelector("#age").value;
    anciennetePermis = document.querySelector("#anciennetePermis").value;
    nbrAccidents = document.querySelector("#nbrAccidents").value;
    ancienneteAssurance = document.querySelector("#ancienneteAssurance").value;

    pointMalus = nbrAccidents;

    if (age < 25) {
        pointMalus++;
    }
    if (anciennetePermis < 2) {
        pointMalus++;
    }
    if (ancienneteAssurance > 5) {
        pointMalus = pointMalus - 1;
    }

    switch (pointMalus) {
        case -1:
            resultatAssurance.innerHTML = `<h3 class="bleu">Tarif bleu</h3>`;
            break;
        case 0:
            resultatAssurance.innerHTML = `<h3 class="vert">Tarif vert</h3>`;
            break;
        case 1:
            resultatAssurance.innerHTML = `<h3 class="orange">Tarif orange</h3>`;
            break;
        case 2:
            resultatAssurance.innerHTML = `<h3 class="rouge">Tarif rouge</h3>`;
            break;
        case 3:
            resultatAssurance.innerHTML = `<h3 class="refuse">Vous etes refusé</h3>`;
            break;
    }
}

bouton.addEventListener("click", calculTarif);