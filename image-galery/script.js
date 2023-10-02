const grid = document.getElementById("grid"); 
const search = document.getElementById("input"); 
const error = document.querySelector(".error");
const loader = document.querySelector(".loader");
const btn = document.querySelector(".fa-search");
const X = document.querySelector(".fa-times");

async function getFoto(query) {
    try {
        const li = document.createElement("li");
        loader.classList.add("loader_active");
        li.classList.add("img");
        const url = `https://api.unsplash.com/photos/random?query=${query}&client_id=6pJV3K7B93fP_mmR31tE_zXipoY-1wqf8aUuukVWG3c`;
        const res = await fetch(url);
        const data = await res.json();
        const src = await data.urls.regular;
        const urlSRc = `url(${src})`;
        li.style.backgroundImage = urlSRc;
        grid.append(li);
        error.textContent = ""; 
    } catch (err) {
        console.log(err)
        error.textContent = "There was a problem sending your request. Please try again….";
    } finally {
        loader.classList.remove("loader_active");
    }
}

async function getFotos(value){
    const items = new Array(6); 
    grid.innerHTML = ""; 
    for await (let i of items) {
        getFoto(value)
    }
}

function handler(event){
    event.preventDefault();
    const value = event.target.value;
    getFotos(value);
}

X.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    search.value = ""; 
})
search.addEventListener("change", handler);
window.onload = function() {
    search.focus();
    getFotos("winter");
}