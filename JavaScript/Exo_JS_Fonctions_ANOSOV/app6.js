let troisNbr = [parseInt(prompt("Entrez le premier nombre")), parseInt(prompt("Entrez le deuxieme nombre")), parseInt(prompt("Entrez le troisieme nombre"))];

function getMax(){
    let tabloDecroissant = troisNbr.sort(function(a, b){return b - a});
    return tabloDecroissant.at(0);
}

console.log(`Le plus grand nombre parmi ${troisNbr} est ${getMax()}`);