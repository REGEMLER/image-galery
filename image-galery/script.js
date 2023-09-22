const grid = document.getElementById("grid"); 
const search = document.getElementById("input"); 
const error = document.querySelector(".error");

async function getFoto(query) {
    try {
        const img = new Image();
        const url = `https://api.unsplash.com/photos/random?query=${query}&client_id=6pJV3K7B93fP_mmR31tE_zXipoY-1wqf8aUuukVWG3c`;
        const res = await fetch(url);
        const data = await res.json();
        const src = await data.urls.regular;
        const urlSRc = `url(${src})`;
        img.src = await src;
        img.onload = () => {
            const li = document.createElement("li");
            li.classList.add("img");
            li.style.backgroundImage = urlSRc;
            grid.append(li); 
            error.textContent = "";
        };
    } catch (err) {
        error.textContent = "There was a problem sending your request. Please try again….";
    }
  }

  function handler(event){
    event.preventDefault();
    const value = event.target.value;
    getFoto(value);
  }

  search.addEventListener("change", handler)

//   getFoto("morning")
//   getFoto("morning")
//   getFoto("morning")
//   getFoto("morning")
//   getFoto("morning")
//   getFoto("morning")
//   getFoto("summer")
//   getFoto("night")
//   getFoto("winter")