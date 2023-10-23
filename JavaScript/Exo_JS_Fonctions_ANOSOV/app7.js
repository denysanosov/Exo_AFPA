function getRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
}
const nbrSecret = getRandomInt(10);

function estBon(n) {
    return n === nbrSecret;
}

function deviner() {
    const nbr = parseInt(prompt("Devinez le nombre entre 0 et 10"));
    return estBon(nbr);
}

for(i = 0; i < 3; i++) {
    if(deviner()) {
        console.log("Bravo !");
        break;
    } else if (i === 2) {
        console.log("Vous avez perdu");
    }
}