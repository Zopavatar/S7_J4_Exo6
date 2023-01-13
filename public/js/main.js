document.querySelector("h1").innerText = "Les attributs class et id";

document.querySelector("h2").innerText = "Exercice 2 partie A";

let h2 = document.querySelectorAll("h2");

h2[1].innerText = "Exercice 2 partie B";

document.querySelector("p").innerHTML = "L'ajout de class et d'ID est assez simple, il suffit de connaitre les methodes <b>par coeur</b>";

let p = document.querySelectorAll("p");

p[1].innerHTML = "La manipulation de l'attribut Style peut-être une <i>solution</i> rapide";




//part 2
document.querySelector("h1").id = "bigTitle";

document.querySelector("div").classList.add("container");

h2.forEach(element=>{
    element.classList.add("title");
})


p.forEach(element=>{
    element.classList.add("text");
})



//part 3

document.querySelector("section").classList.add("margin-bottom","border-black","padding");

document.querySelectorAll("section")[1].classList.add("margin-top","border-black","padding")


document.querySelectorAll("section")[1].querySelector("div").classList.add("ma_classe");
document.querySelectorAll("section")[1].querySelector("div").innerHTML = "<style> .ma_classe {background-color: blue; border: solid red 2px; height: 20px; width:20px;}</style>";
