let nbr = parseInt(prompt("Entrez un nombre positif"));

function estPremier(nbr) {
    if (nbr < 2) {
        return false;
    }
      
    for (let i = nbr - 1; i > 1; i--) {
        if (nbr % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(estPremier(nbr));