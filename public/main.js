//Selection et Création//
let body = document.querySelector ("body")
// Image via DOM //
const image = document.createElement('img')
image.src = './public/img/gutz.jpeg'
body.appendChild(image)

let  monPremierH = document.createElement ("h1")
let textePremierH = document.createTextNode ("Counter Gutz")

let boutonMoins = document.createElement ("button")
let texteBoutonMoins = document.createTextNode("Moins")

let boutonPlus = document.createElement("button")
let texteBoutonPlus = document.createTextNode("Plus")

let boutonRelance = document.createElement("button")
let texteBoutonRelance = document.createTextNode("Relancer")

body.appendChild(boutonPlus)
boutonPlus.appendChild(texteBoutonPlus)
body.appendChild(boutonRelance)
boutonRelance.appendChild(texteBoutonRelance)
body.appendChild(boutonMoins)
boutonMoins.appendChild(texteBoutonMoins)
body.appendChild(monPremierH)
monPremierH.appendChild(textePremierH)


//Ancien style //
// monPremierH.style.textAlign = "center"
// monPremierH.style.color = "red"
// boutonPlus.style.textAlign= "center"
// boutonMoins.style.textAlign= "center"
// boutonRelance.style.textAlign= "center"

//compteur affichage //
let compteur = document.createElement("h2")

compteur.textContent = "0"
compteur.style.textAlign = "center"
compteur.style.color = "white"
body.appendChild(compteur)



// événements +=- //
let valeurCompteur = 0;

boutonPlus.addEventListener("click", () => {
    valeurCompteur++;
    compteur.textContent = valeurCompteur;
});

boutonMoins.addEventListener("click", () => {
    valeurCompteur--;
    compteur.textContent = valeurCompteur;
});

boutonRelance.addEventListener("click", () => {
    valeurCompteur = 0;
    compteur.textContent = valeurCompteur;
});