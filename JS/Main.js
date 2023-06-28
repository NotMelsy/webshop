/* slideshow */
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// SHOES
let allGames = document.getElementsByClassName("game");
let filters = document.getElementsByClassName("filter");


setInterval(function(){
    document.getElementsByTagName("body")[0].style.overflow = "auto";
}, 1500);//laat scrollen na 1.5s

window.scrollTo(0, 0);//zet window naar boven bij refresh

for(let i = 0; i < filters.length; i++){
    filters[i].checked = true;
}//zet checkboxes op checked bij refresh

let Vicinity = document.getElementById("checkbox-Vicinity");
let Nike = document.getElementById("checkbox-Nike");
let NewB = document.getElementById("checkbox-NewB");

Vicinity.onchange = function(){
    if(Vicinity.checked === true){
        for(let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "Vicinity"){    
                allGames[i].style.display = "block";
            }
        }
    }//laat list items zien
    else{
        for(let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "Vicinity"){    
                allGames[i].style.display = "none";
            }
        }
    }//laat list items verdwijnen
}

Nike.onchange = function(){
    if(Nike.checked === true){
        for(let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "Nike"){    
                allGames[i].style.display = "block";
            }
        }
    }//laat list items zien
    else{
        for(let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "Nike"){    
                allGames[i].style.display = "none";
            }
        }
    }//laat list items verdwijnen
}

NewB.onchange = function(){
    if(NewB.checked === true){
        for(let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "NewB"){    
                allGames[i].style.display = "block";
            }
        }
    }//laat list items zien
    else{
        for(let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "NewB"){    
                allGames[i].style.display = "none";
            }
        }
    }//laat list items verdwijnen
}