let nbr1 = parseInt(prompt("Entrez le premier nombre"));
let nbr2 = parseInt(prompt("Entrez le deuxieme nombre"));

function additionFonction(nbr1, nbr2) {
    return nbr1 + nbr2
};

let total = additionFonction(nbr1, nbr2);

console.log(`La somme de ces deux nombres est ${total}`);