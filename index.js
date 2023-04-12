const quote = document.querySelector("p");
const person = document.querySelector('h2');

function changeFun(){
    fetch('https://api.breakingbadquotes.xyz/v1/quotes')
    .then(res => res.json())
    .then(res => {
        quote.innerHTML = res[0].quote;
        person.innerHTML = res[0].author;
    }
    );
}