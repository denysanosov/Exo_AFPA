let nbrSaisi;
let prix;
let bouton = document.querySelector("#bouton");
let resultatPrix = document.querySelector("#resultatPrix");


function effectuerCalcul() {

    nbrSaisi = document.querySelector("#nbrSaisi").value;

    if (nbrSaisi <= 10) {
        prix = nbrSaisi * .1;
    } else if (nbrSaisi <= 30) {
        prix = (nbrSaisi - 10) * .09 + 1;
    } else {
        prix = (nbrSaisi - 30) * .08 + 2.8;
    }

    resultatPrix.innerHTML = `Le prix total pour ${nbrSaisi} photocopies est de ${prix.toFixed(2)} euros`;
}

bouton.addEventListener("click", effectuerCalcul);