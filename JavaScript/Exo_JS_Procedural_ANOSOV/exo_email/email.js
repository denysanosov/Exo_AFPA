let mailSaisi;
let mailSaisiCoupe;
let positionArobase;
let bouton = document.querySelector("#bouton");
let resultatMail = document.querySelector("#resultatMail");


function verifierMail() {

    mailSaisi = document.querySelector("#mailSaisi").value;

    if(mailSaisi.includes("@") && mailSaisi.includes(".")) {
        positionArobase = mailSaisi.indexOf("@");
        mailSaisiCoupe = mailSaisi.substring(positionArobase);
        
        if(mailSaisiCoupe.includes(".")) {
            resultatMail.innerHTML = `<h3 class="positif">Adresse mail valide !</h3>`;
        }
        
        else {
            resultatMail.innerHTML = `<h3 class="negatif">Adresse mail invalide !</h3>`;
        }
    }

    else {
        resultatMail.innerHTML = `<h3 class="negatif">Adresse mail invalide !</h3>`;
    }
}

bouton.addEventListener("click", verifierMail);