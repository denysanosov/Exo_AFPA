let rechercheTitre = document.querySelector("#rechercheTitre");
let rechercheAnnee = document.querySelector("#rechercheAnnee");
let rechercheType = document.querySelector("#rechercheType");
let resultatRecherche = document.querySelector("#resultatRecherche");

async function loadMovies(searchTerm) {
    const URL = `https://www.omdbapi.com/?s=${searchTerm}&page=1&apikey=dd25973c`;
    const res = await fetch(`${URL}`);
    const data = await res.json();
    if(data.Response == "True") displayMovieList(data.Search);
}

function findMovies(){
    let searchTerm = (rechercheTitre.value).trim();
    if(searchTerm.length > 0){
        resultatRecherche.classList.remove("hidden");
        loadMovies(searchTerm);
    } else {
        resultatRecherche.classList.add("hidden");
    }
}

function displayMovieList(movies){
    resultatRecherche.innerHTML = "";
    for(let idx = 0; idx < movies.length; idx++){
        let movieListItem = document.createElement('article');
        movieListItem.dataset.id = movies[idx].imdbID;
        movieListItem.classList.add('articleFilm')
        if(movies[idx].Poster != "N/A")
            moviePoster = movies[idx].Poster;
        else
            moviePoster = "https://www.ncenet.com/wp-content/uploads/2020/04/No-image-found.jpg";

            movieListItem.innerHTML = `
                <img src="${moviePoster}">
                <p class="articleTitre">
                    ${movies[idx].Title}
                </p>
                <p class="articleAnnee">
                    ${movies[idx].Year}
                </p>            
            `;
            resultatRecherche.appendChild(movieListItem);
    }
}

document.querySelector("#btnRechercheFilm").addEventListener("click", async () => findMovies());



// Filtre pour la page Recherche, malheureusement non fonctionnel je ne sais pas pourquoi, peut etre pour une histoire d'index mais je ne suis pas sur

let selectRecherche = document.querySelector("#selectRecherche");

function trierRecherche() {
    if (document.querySelector("#selectRecherche").value == "selectRechercheTitre") {
        movies.sort((a, b) => (a.Title > b.Title) ? 1 : ((b.Title > a.Title) ? -1 : 0));
    }

    if (document.querySelector("#selectRecherche").value == "selectRechercheAnnee") {
        movies.sort((a, b) => b.Year - a.Year);
    }

    displayMovieList(movies);
}


selectRecherche.addEventListener("change", trierRecherche);





// Attention les yeux, voici mon systeme de pagination
// Ca pique mais ca marche
//  page 2


async function loadMoviesP2(searchTerm) {
    const URL = `https://www.omdbapi.com/?s=${searchTerm}&page=2&apikey=dd25973c`;
    const res = await fetch(`${URL}`);
    const data = await res.json();
    // console.log(data.Search);
    if(data.Response == "True") displayMovieList(data.Search);
}

function findMoviesP2(){
    let searchTerm = (rechercheTitre.value).trim();
    if(searchTerm.length > 0){
        resultatRecherche.classList.remove("hidden");
        loadMoviesP2(searchTerm);
    } else {
        resultatRecherche.classList.add("hidden");
    }
}


document.querySelector("#pageDeux").addEventListener("click", async () => findMoviesP2());



//  page 3


async function loadMoviesP3(searchTerm) {
    const URL = `https://www.omdbapi.com/?s=${searchTerm}&page=3&apikey=dd25973c`;
    const res = await fetch(`${URL}`);
    const data = await res.json();
    // console.log(data.Search);
    if(data.Response == "True") displayMovieList(data.Search);
}

function findMoviesP3(){
    let searchTerm = (rechercheTitre.value).trim();
    if(searchTerm.length > 0){
        resultatRecherche.classList.remove("hidden");
        loadMoviesP3(searchTerm);
    } else {
        resultatRecherche.classList.add("hidden");
    }
}


document.querySelector("#pageTrois").addEventListener("click", async () => findMoviesP3());



//  page 4


async function loadMoviesP4(searchTerm) {
    const URL = `https://www.omdbapi.com/?s=${searchTerm}&page=4&apikey=dd25973c`;
    const res = await fetch(`${URL}`);
    const data = await res.json();
    // console.log(data.Search);
    if(data.Response == "True") displayMovieList(data.Search);
}

function findMoviesP4(){
    let searchTerm = (rechercheTitre.value).trim();
    if(searchTerm.length > 0){
        resultatRecherche.classList.remove("hidden");
        loadMoviesP4(searchTerm);
    } else {
        resultatRecherche.classList.add("hidden");
    }
}


document.querySelector("#pageQuatre").addEventListener("click", async () => findMoviesP4());


//  page 5


async function loadMoviesP5(searchTerm) {
    const URL = `https://www.omdbapi.com/?s=${searchTerm}&page=5&apikey=dd25973c`;
    const res = await fetch(`${URL}`);
    const data = await res.json();
    // console.log(data.Search);
    if(data.Response == "True") displayMovieList(data.Search);
}

function findMoviesP5(){
    let searchTerm = (rechercheTitre.value).trim();
    if(searchTerm.length > 0){
        resultatRecherche.classList.remove("hidden");
        loadMoviesP5(searchTerm);
    } else {
        resultatRecherche.classList.add("hidden");
    }
}


document.querySelector("#pageCinq").addEventListener("click", async () => findMoviesP5());


//  page 6


async function loadMoviesP6(searchTerm) {
    const URL = `https://www.omdbapi.com/?s=${searchTerm}&page=6&apikey=dd25973c`;
    const res = await fetch(`${URL}`);
    const data = await res.json();
    // console.log(data.Search);
    if(data.Response == "True") displayMovieList(data.Search);
}

function findMoviesP6(){
    let searchTerm = (rechercheTitre.value).trim();
    if(searchTerm.length > 0){
        resultatRecherche.classList.remove("hidden");
        loadMoviesP6(searchTerm);
    } else {
        resultatRecherche.classList.add("hidden");
    }
}


document.querySelector("#pageSix").addEventListener("click", async () => findMoviesP6());


//  page 7


async function loadMoviesP7(searchTerm) {
    const URL = `https://www.omdbapi.com/?s=${searchTerm}&page=7&apikey=dd25973c`;
    const res = await fetch(`${URL}`);
    const data = await res.json();
    // console.log(data.Search);
    if(data.Response == "True") displayMovieList(data.Search);
}

function findMoviesP7(){
    let searchTerm = (rechercheTitre.value).trim();
    if(searchTerm.length > 0){
        resultatRecherche.classList.remove("hidden");
        loadMoviesP7(searchTerm);
    } else {
        resultatRecherche.classList.add("hidden");
    }
}


document.querySelector("#pageSept").addEventListener("click", async () => findMoviesP7());



//  page 8


async function loadMoviesP8(searchTerm) {
    const URL = `https://www.omdbapi.com/?s=${searchTerm}&page=8&apikey=dd25973c`;
    const res = await fetch(`${URL}`);
    const data = await res.json();
    // console.log(data.Search);
    if(data.Response == "True") displayMovieList(data.Search);
}

function findMoviesP8(){
    let searchTerm = (rechercheTitre.value).trim();
    if(searchTerm.length > 0){
        resultatRecherche.classList.remove("hidden");
        loadMoviesP8(searchTerm);
    } else {
        resultatRecherche.classList.add("hidden");
    }
}


document.querySelector("#pageHuit").addEventListener("click", async () => findMoviesP8());


//  page 9


async function loadMoviesP9(searchTerm) {
    const URL = `https://www.omdbapi.com/?s=${searchTerm}&page=9&apikey=dd25973c`;
    const res = await fetch(`${URL}`);
    const data = await res.json();
    // console.log(data.Search);
    if(data.Response == "True") displayMovieList(data.Search);
}

function findMoviesP9(){
    let searchTerm = (rechercheTitre.value).trim();
    if(searchTerm.length > 0){
        resultatRecherche.classList.remove("hidden");
        loadMoviesP9(searchTerm);
    } else {
        resultatRecherche.classList.add("hidden");
    }
}


document.querySelector("#pageNeuf").addEventListener("click", async () => findMoviesP9());


//  page 10


async function loadMoviesP10(searchTerm) {
    const URL = `https://www.omdbapi.com/?s=${searchTerm}&page=10&apikey=dd25973c`;
    const res = await fetch(`${URL}`);
    const data = await res.json();
    // console.log(data.Search);
    if(data.Response == "True") displayMovieList(data.Search);
}

function findMoviesP10(){
    let searchTerm = (rechercheTitre.value).trim();
    if(searchTerm.length > 0){
        resultatRecherche.classList.remove("hidden");
        loadMoviesP10(searchTerm);
    } else {
        resultatRecherche.classList.add("hidden");
    }
}


document.querySelector("#pageDix").addEventListener("click", async () => findMoviesP10());