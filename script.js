const quote = document.querySelector("#quote");
const author = document.querySelector("#author");
const btn = document.querySelector("#btn");

btn.addEventListener("click", getQuote);

function getQuote() {
    fetch("https://quotable.io/random")
    .then(result => result.json())
    .then(data => {
        quote.innerHTML = `"${data.content}
        "`;
        author.innerHTML = data.author;
    })
    .catch(error => console.log('error', error));
}



