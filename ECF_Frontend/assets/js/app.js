// -----------------------------------------------------------

// GLOBAL

let tableMesFilms = document.querySelector("#tableMesFilms");

let films = [
    {
        title: "Deadpool",
        years: 2016,
        authors: "Tim Miller"
    },
    {
        title: "Spiderman",
        years: 2002,
        authors: "Sam Raimi"
    },
    {
        title: "Scream",
        years: 1996,
        authors: "Wes Craven"
    },
    {
        title: "It: chapter 1",
        years: 2019,
        authors: "Andy Muschietti"
    }
];

// -----------------------------------------------------------

// FONCTION RAFRAICHIR LE TABLEAU

function refreshTable() {
    tableMesFilms.innerHTML = "";
    for (let film of films) {
        tableMesFilms.innerHTML += `
                            <tr>
                                <td>
                                    ${film.title}
                                </td>
                                <td>
                                    ${film.years}
                                </td>
                                <td>
                                    ${film.authors}
                                </td>
                                <td>
                                    <button class="btnSupprimer">Supprimer</button>
                                </td>
                            </tr>
                        `
    }
}

// -----------------------------------------------------------

// FONCTION VERIFICATION DES INPUT





// -----------------------------------------------------------

// AFFICHAGE DE BASE

for (let film of films) {
    tableMesFilms.innerHTML += `    
        <tr>
            <td>
                ${film.title}
            </td>
            <td>
                ${film.years}
            </td>
            <td>
                ${film.authors}
            </td>
            <td>
                <button class="btnSupprimer">Supprimer</button>
            </td>
        </tr>
    `
}

// -----------------------------------------------------------

// BOUTON QUI FAIT APPARAITRE LE FORMULAIRE

let btnPopForm = document.querySelector("#btnPopForm");
let formulaireDajout = document.querySelector("#formulaireDajout");

function popForm() {

    formulaireDajout.classList.remove("hidden");

    btnPopForm.classList.add("hidden");
}

btnPopForm.addEventListener("click", popForm);

// ------------------------------------------------------------

// BOUTON QUI AJOUTE LE NOUVEAU FILM

let btnAjoutFilm = document.querySelector("#btnAjoutFilm");
let msgErreur = document.querySelector("#msgErreur");
let msgValide = document.querySelector("#msgValide");
let resultatMsgErreur = "";

let boolCheckTitle;
let boolCheckYears;
let boolCheckAuthors;

const ajoutFilm = (ev) => {
    ev.preventDefault();

    let newFilm = {
        title: document.querySelector("#ajoutTitre").value,
        years: parseInt(document.querySelector("#ajoutAnnee").value),
        authors: document.querySelector("#ajoutRealisateur").value
    }

    newFilm.title = newFilm.title.charAt(0).toUpperCase() + newFilm.title.slice(1);

    newFilm.authors = newFilm.authors.charAt(0).toUpperCase() + newFilm.authors.slice(1);


    if ((newFilm.title).length < 2) {
        boolCheckTitle = false;
        resultatMsgErreur += "Le titre doit comporter au moins 2 caracteres";
    } else {
        boolCheckTitle = true;
    }

// Le message d'erreur de l'annee pop meme si les conditions sont respectées, j'ignore pourquoi

    if (((newFilm.years).length !== 4) || (newFilm.years < 1900) || (newFilm.years > (new Date().getFullYear()))) {
        boolCheckYears = false;
        resultatMsgErreur += "L'annee doit comporter 4 caracteres et etre comprise entre 1900 et l'annee en cours";
    } else {
        boolCheckYears = true;
    }

    if ((newFilm.authors).length < 5) {
        boolCheckAuthors = false;
        resultatMsgErreur += "Le nom du realisateur doit comporter au moins 5 caracteres";
    } else {
        boolCheckAuthors = true;
    }

    msgErreur.innerHTML = `${resultatMsgErreur}`

    setTimeout(function() {
        msgErreur.innerHTML = "";
    }, 3000);



    if ((boolCheckTitle = true) && (boolCheckYears = true) && (boolCheckAuthors = true)) {
        films.push(newFilm);

        document.forms[0].reset();

        msgValide.innerHTML = `Film ajouté avec succes`;

        setTimeout(function() {
            msgValide.innerHTML = "";
        }, 3000);
    
    
        formulaireDajout.classList.add("hidden");
    
        btnPopForm.classList.remove("hidden");
    
        refreshTable();


    } else {
        console.log("Ouis");;
    }



}


btnAjoutFilm.addEventListener("click", ajoutFilm);

// ------------------------------------------------------------

// BOUTON SUPPRIMER

// let btnSupprimer = document.querySelectorAll(".btnSupprimer");

// function supprimerFilm() {
//     btnSupprimer.closest(films).remove();

//     refreshTable();
// }

// btnSupprimer.addEventListener("click", supprimerFilm);

// ------------------------------------------------------------

// FILTRE MES FILMS

let filtreMesFilms = document.querySelector("#filtreMesFilms");

function trierMesFilms() {
    if (document.querySelector("#filtreMesFilms").value == "filtreMesFilmsTitre") {
        films.sort((a, b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0));
    }

    if (document.querySelector("#filtreMesFilms").value == "filtreMesFilmsAnnee") {
        films.sort((a, b) => b.years - a.years);
    }

    if (document.querySelector("#filtreMesFilms").value == "filtreMesFilmsRealisateur") {
        films.sort((a, b) => (a.authors > b.authors) ? 1 : ((b.authors > a.authors) ? -1 : 0));
    }

    refreshTable();
}


filtreMesFilms.addEventListener("change", trierMesFilms);

// ------------------------------------------------------------