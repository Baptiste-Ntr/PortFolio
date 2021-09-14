const AnimTXT = document.getElementById("animtxt");

window.addEventListener("load", function(event) {
  console.log("tout est chargé");
  window.scroll(0,0);
})

new Typewriter(AnimTXT, {
  deleteSpeed: 20,
})
  .changeDelay(100)
  .typeString("Bonjour, <br>")
  .pauseFor(300)
  .typeString("Bienvenue sur mon portfolio.")
  .pause(1000)
  .deleteChars(10)
  .typeString("<a class='blue'> Portfolio</a>." )
  .start();

function contactopen() {
  document.getElementById("mailcontainer").style.display = "flex";
  document.getElementById("btnsend").style.display = "flex";
}

function contactclose() {
  document.getElementById("mailcontainer").style.display = "none";
  document.getElementById("btnsend").style.display = "none";
}

function scrolldown(){
  window.scroll(0,1000);
  document.getElementById("projets").className = "projetsinverse";
  document.getElementById("accueil").className = "accueilinverse";
}

function scrollup() {
  window.scroll(0,0);
  document.getElementById("projets").className = "projets";
  document.getElementById("accueil").className = "accueil";
}

document.getElementById("red").addEventListener("click", function() {
  document.location.href = "/projets/Calculatrice/index.html";
  console.log("ouipeutetre");
})