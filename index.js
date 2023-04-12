const quote = document.querySelector("p");
const person = document.querySelector('h2');

function changeFun(){
    fetch('https://programming-quotesapi.vercel.app/api/random')
    .then(res => res.json())
    .then(res => {
        quote.innerHTML = res.quote;
        person.innerHTML = res.author;
    }
    );
}