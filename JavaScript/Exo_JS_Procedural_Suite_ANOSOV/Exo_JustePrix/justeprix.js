let prixSaisi;
let nbrRandom;
let valeurADeviner;
let nbrTentatives;

let objetEnJeu = document.querySelector("#objetEnJeu");
let afficheNbrTentatives = document.querySelector("#afficheNbrTentatives");
let bouton = document.querySelector("#bouton");
let resultat = document.querySelector("#resultat");

let valeurStylo = 59;
let valeurBonnet = 17;
let valeurMontre = 85;
let valeurCoffret = 65;
let valeurTrotinette = 95;


nbrRandom = Math.floor(Math.random() * 5);

switch (nbrRandom) {
    case 0: objetEnJeu.innerHTML = '<img src="https://www.montblanc-boutique-montpellier.com/1559-thickbox_default/stylo-plume-meisterstuck-classique-dore.jpg" alt="stylo"><p>Stylo Plume</p>';
            valeurADeviner = valeurStylo;
        break;

    case 1: objetEnJeu.innerHTML = '<img src="https://www.molinel.com/16337/bonnet-homme-chaud-noir.jpg" alt="bonnet"><p>Bonnet</p>';
            valeurADeviner = valeurBonnet;
        break;
    
    case 2: objetEnJeu.innerHTML = '<img src="https://antenen.watch/cdn/shop/products/EI-6031_b-montre-femme-pas-cher-eichmuller-3-aiguilles-et-date-chiffres-arabes-argent-boitier-acier-doree-cadran-blanc-lunette-certie-bracelet-metal-bicolor-acier-doree-type-grosse-ma.webp?v=1672955579" alt="montre"><p>Montre</p>';
            valeurADeviner = valeurMontre;
        break;

    case 3: objetEnJeu.innerHTML = '<img src="https://m.media-amazon.com/images/I/41-XQP2RlWL._AC_UF894,1000_QL80_.jpg" alt="coffret massage"><p>Coffret Massage</p>';
            valeurADeviner = valeurCoffret;
        break;

    case 4: objetEnJeu.innerHTML = '<img src="https://www.rollernco.com/30027-large_default/trotinette-freestyle-root-type-r-rocket-fuel.jpg" alt="trotinette"><p>Trotinette</p>';
            valeurADeviner = valeurTrotinette;
        break;
}


nbrTentatives = 10;

function jeuJustePrix() {

    prixSaisi = parseInt(document.querySelector("#prixSaisi").value);

    if ((prixSaisi !== valeurADeviner) && (nbrTentatives > 0)) {
        nbrTentatives--;
        afficheNbrTentatives.innerHTML = `${nbrTentatives}`;
    }
    
    if (prixSaisi === valeurADeviner) {
        resultat.innerHTML = '<p class="positif">Vous avez gagné, bravo !</p>';
    }
    
    if (nbrTentatives < 1) {
        resultat.innerHTML = '<p class="negatif">Vous avez perdu</p>';
    }
}

bouton.addEventListener("click", jeuJustePrix);