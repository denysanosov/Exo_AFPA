let sexe = prompt("Entrez votre sexe (M/F) :");
let age = prompt("Entrez votre age :");

if((sexe == "M" && age > 20) || (sexe == "F" && age >= 18 && age <= 35)){
    console.log("Imposable")
} else
    console.log("Non imposable");