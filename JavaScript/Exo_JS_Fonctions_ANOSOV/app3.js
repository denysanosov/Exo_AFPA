let nbr = parseInt(prompt("Entrez un nombre"));

function incr() {
    nbr++;
    return nbr;
};

let resultat = incr(nbr);

console.log(`L'entier suivant est ${resultat}`);