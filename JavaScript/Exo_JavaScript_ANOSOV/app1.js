let heure = prompt("Entrez les heures :");
let minute = prompt("Entrez les minutes :");
let seconde = prompt("Entrez les secondes :");

seconde = (+seconde + 1);

if(seconde == 60){
    seconde = 0
    minute = (+minute + 1)
};

if(minute == 60){
    minute = 0
    heure = (+heure + 1)
};
    
if(heure == 24){
    heure = 0
};

console.log(`Dans une seconde il sera ${heure}:${minute}:${seconde}`);