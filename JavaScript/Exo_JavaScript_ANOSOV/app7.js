let nbrSecret = Math.floor(Math.random() * 11);
let nbrSaisi = prompt("Devinez le nombre entre 0 et 10");

while(nbrSaisi != nbrSecret){
    if(nbrSaisi > nbrSecret){
        console.log("Moins");
        nbrSaisi = prompt("Devinez le nombre entre 0 et 10");
    }
    if(nbrSaisi < nbrSecret){
        console.log("Plus");
        nbrSaisi = prompt("Devinez le nombre entre 0 et 10");
}
}

console.log("Bravo !");