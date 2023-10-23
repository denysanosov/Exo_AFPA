const posts = fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json());
const users = fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json());

let tabPostUsers;
let tabPostUsersClean;

// Dommage que tu n'ai pas pu me repondre sur discord pour m'aiguiller vendredi, j'aurai bien aimé le reussir sans la correction, pas grave

Promise.all([posts, users])

    .then(([posts, users]) => {

        tabPostUsers = [].concat(posts, users);

        tabPostUsersClean = [tabPostUsers.title, tabPostUsers.username, tabPostUsers.body];

        for (let tabPostUser of tabPostUsers) {
            document.querySelector("#containerFlex").innerHTML += `
                <article>
                    <h5>${tabPostUser.title}</h5>
                    <p>${tabPostUser.username}</p>
                    <hr>
                    <p>${tabPostUser.body.substring(0, 50)}</p>
                </article>
            `;
        }
    })

    .catch(error => {
        console.error(error);
    });