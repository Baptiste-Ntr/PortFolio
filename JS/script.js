const AnimTXT = document.getElementById("animtxt");

new Typewriter(AnimTXT, {
  deleteSpeed: 20,
})
  .changeDelay(100)
  .typeString("Bonjour, <br>")
  .pauseFor(300)
  .typeString("Voici mon portfolio.")
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
  console.log("oui");
  window.scroll(0,1000);
  document.getElementById("projets").className = "projetsinverse";
  document.getElementById("accueil").className = "accueilinverse";
}