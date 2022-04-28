const AnimTXT = document.getElementById("animtxt");

window.addEventListener("load", function(event) {
  console.log("tout est chargé");
  window.scroll(0,0);
})

new Typewriter(AnimTXT, {
  deleteSpeed: 30,
})
  .changeDelay(100)
  .typeString("Baptiste Nautré, <br>")
  .pauseFor(300)
  .typeString("Développeur Front-End")
  .pause(1000)
  .deleteChars(10)
  .typeString("<a class='blue'> Front-End</a>." )
  .start();

// function contactopen() {
//   document.getElementById("mailcontainer").style.display = "flex";
//   document.getElementById("btnsend").style.display = "flex";
//   window.scroll(0,0);
// }

// function contactclose() {
//   document.getElementById("mailcontainer").style.display = "none";
//   document.getElementById("btnsend").style.display = "none";
// }


function scrolldown(){
  section.scrollIntoView();
}

function scrollup() {
  window.scroll(0,0);
}

var boule = document.querySelector(".boule");

boule.onclick = function() {
  boule.classList.toggle('active');
  setTimeout(function(){
    boule.classList.toggle('active')
  }, 3000);
}

var bouboule = document.getElementById("bouboule");
var bouboule2 = document.getElementById("bouboule2");

window.addEventListener('scroll', function(){
  var value = window.scrollY;

  value = value * 0.10626992561105207;

  setTimeout(function () {
    bouboule.style.top = 21.25 + value * 0.85 + "vh";
  }, 50);

  setTimeout(function(){
    bouboule2.style.top = 220 - value * 0.5 + "vh";
  }, 200);
})

