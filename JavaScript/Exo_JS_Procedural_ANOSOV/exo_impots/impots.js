let sexeSaisi;
let ageSaisi;
let bouton = document.querySelector("#bouton");
let resultatImpot = document.querySelector("#resultatImpot");
let boolHomme;
let boolFemme;

function verifierImposition() {

    sexeSaisi = document.querySelector("#sexeSaisi").value;
    ageSaisi = document.querySelector("#ageSaisi").value;

    boolHomme = (sexeSaisi === "homme" && ageSaisi > 20);
    boolFemme = (sexeSaisi === "femme" && ageSaisi >= 18 && ageSaisi <= 35);


    if (boolHomme || boolFemme) {
        resultatImpot.innerHTML = '<h2 class="negatif">Vous etes imposable</h2>';
    } else {
        resultatImpot.innerHTML = '<h2 class="positif">Vous netes pas imposable</h2>';
    }
}

bouton.addEventListener("click", verifierImposition);