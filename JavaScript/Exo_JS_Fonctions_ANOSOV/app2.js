let nbrMinute = parseInt(prompt("Entrez le nombre de minutes que vous voulez transformer en secondes"));

function minuteToSecond(nbrMinute) {
    return nbrMinute * 60
};

let resultat = minuteToSecond(nbrMinute);

console.log(`${nbrMinute} minutes est equivalent a ${resultat} secondes`);