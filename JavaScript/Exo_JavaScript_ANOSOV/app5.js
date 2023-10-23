let jour = prompt("Entrez le jour :");
let mois = prompt("Entrez le mois :");
let annee = prompt("Entrez l'année :");

if((mois == 1 || mois == 3 || mois == 5 || mois == 7 || mois == 8 || mois == 10 || mois == 12) && jour <= 31){
    console.log("Date valide")
} else if((mois == 4 || mois == 6 || mois == 9 || mois == 11) && jour <= 30){
    console.log("Date valide")
} else if((mois == 2) && ((annee%4 == 0) && (annee%100 != 0) || (annee%400 == 0)) && jour <= 29){
    console.log("Date valide")
} else if(mois == 2 && jour <= 28){
    console.log("Date valide")
} else
    console.log("Date non valide");