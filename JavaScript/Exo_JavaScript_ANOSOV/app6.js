let nbr = prompt("Saisir un nombre entre 0 et 10 :");

if(nbr >= 0 && nbr <= 10){
    for (let i = nbr; i >= 0; i--) {
        console.log(i)
    }
} else
    console.log("Erreur");