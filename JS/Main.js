// SHOES
let allShoes = document.getElementsByClassName("game");
let filters = document.getElementsByClassName("filter");


setInterval(function () {
    document.getElementsByTagName("body")[0].style.overflow = "auto";
}, 1500);//laat scrollen na 1.5s

window.scrollTo(0, 0);//zet window naar boven bij refresh

for (let i = 0; i < filters.length; i++) {
    filters[i].checked = true;
}//zet checkboxes op checked bij refresh

let Vicinity = document.getElementById("checkbox-Vicinity");
let Nike = document.getElementById("checkbox-Nike");
let NewB = document.getElementById("checkbox-NewB");

Vicinity.onchange = function() {
    if (Vicinity.checked === true) {
        for (let i = 0; i < allShoes.length; i++) {
            if (allShoes[i].dataset.category === "Vicinity") {
                allShoes[i].style.display = "block";
            }
        }
    }//laat list items zien
    else {
        for (let i = 0; i < allShoes.length; i++) {
            if (allShoes[i].dataset.category === "Vicinity") {
                allShoes[i].style.display = "none";
            }
        }
    }//laat list items verdwijnen
}

Nike.onchange = function() {
    if (Nike.checked === true) {
        for (let i = 0; i < allShoes.length; i++) {
            if (allShoes[i].dataset.category === "Nike") {
                allShoes[i].style.display = "block";
            }
        }
    }//laat list items zien
    else {
        for (let i = 0; i < allShoes.length; i++) {
            if (allShoes[i].dataset.category === "Nike") {
                allShoes[i].style.display = "none";
            }
        }
    }//laat list items verdwijnen
}
NewB.onchange = function() {
    if (NewB.checked === true) {
        for (let i = 0; i < allShoes.length; i++) {
            if (allShoes[i].dataset.category === "NewB") {
                allShoes[i].style.display = "block";
            }
        }
    }//laat list items zien
    else {
        for (let i = 0; i < allShoes.length; i++) {
            if (allShoes[i].dataset.category === "NewB") {
                allShoes[i].style.display = "none";
            }
        }
    }//laat list items verdwijnen
}