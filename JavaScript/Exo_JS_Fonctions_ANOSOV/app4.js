let nbrBase = parseInt(prompt("Entrez la base du triangle"));
let nbrHauteur = parseInt(prompt("Entrez la hauteur du triangle"));

function calcSurface(nbrBase, nbrHauteur) {
    return (nbrBase * nbrHauteur) / 2;
};

let resultat = calcSurface(nbrBase, nbrHauteur);

console.log(`La surface est de ${resultat}`);