let aPayer;
let client;

let bouton = document.querySelector("#bouton");
let resultatMonnaie10 = document.querySelector("#resultatMonnaie10");
let resultatMonnaie5 = document.querySelector("#resultatMonnaie5");
let resultatMonnaie1 = document.querySelector("#resultatMonnaie1");

let billet10 = 0;
let billet5 = 0;
let piece1 = 0;

let montantARendre;


function calculerMonnaie() {

    aPayer = document.querySelector("#aPayer").value;
    client = document.querySelector("#client").value;

    montantARendre = client - aPayer;

    while(montantARendre >= 10) {
        billet10++;
        montantARendre -= 10;
    }

    while(montantARendre >= 5) {
        billet5++;
        montantARendre -= 5;
    }

    while(montantARendre >= 1) {
        piece1++;
        montantARendre -= 1;
    }

    resultatMonnaie10.innerHTML = `${billet10}`;
    resultatMonnaie5.innerHTML = `${billet5}`;
    resultatMonnaie1.innerHTML = `${piece1}`;

    billet10 = 0;
    billet5 = 0;
    piece1 = 0;
}

bouton.addEventListener("click", calculerMonnaie);