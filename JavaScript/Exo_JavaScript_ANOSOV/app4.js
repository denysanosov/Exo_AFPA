let age = prompt("Votre age :");
let dureePermis = prompt("Votre ancienneté de permis :");
let nbrAccident = prompt("Nombre d'accidents :");
let ancienneteAssurance = prompt("Ancienneté dans l'assurance :");
let tarif = "oui";

let score = nbrAccident;

if(age < 25){
    score += 1
};

if(dureePermis < 2){
    score += 1
};

if(ancienneteAssurance > 5){
    score -= 1
};

// Ca marche pas :'(
// switch(score){
//     case < 0 : tarif = "Bleu"; break;
//     case 0 : tarif = "Vert"; break;
//     case 1 : tarif = "Orange"; break;
//     case 2 : tarif = "Rouge"; break;
//     case > 2 : tarif = "Refusé"; break;
// }

if(score < 0){
    tarif = "Bleu"
} else if(score == 0){
    tarif = "Vert"
} else if(score == 1){
    tarif = "Orange"
} else if(score == 2){
    tarif = "Rouge"
} else
    tarif = "Refusé";

console.log(`Votre tarif est ${tarif}`);