let nbrPhotocopie = prompt("Nombre de photocopies ?");
let prix;

if(nbrPhotocopie <= 10){
    prix = nbrPhotocopie * 0.1
} else if(nbrPhotocopie <= 30){
    prix = (nbrPhotocopie - 10) * 0.09 + 1
} else
    prix = (nbrPhotocopie - 30) * 0.08 + 2.8;

console.log(`Le prix total pour ${nbrPhotocopie} photocopies est de ${prix}`);