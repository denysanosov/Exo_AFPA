let xhr = new XMLHttpRequest();

xhr.onreadystatechange = function(posts) {
    if(this.readyState === 4 && this.status === 200) {
        let posts = this.response
        for (let post of posts) {
            document.querySelector("#containerFlex").innerHTML += `
                        <article>
                            <h5>${post.title}</h5>
                            <hr>
                            <p>${post.body.substring(0, 50)}</p>
                        </article>
            `;
        }
    }
}

xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
xhr.responseType = "json";
xhr.send();