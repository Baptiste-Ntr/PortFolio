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