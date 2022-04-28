const cat1 = document.getElementById('cat1');
const cat2 = document.getElementById('cat2');

// fetch("https://api.generated.photos/api/v1/faces?api_key=wN9zRcdx-sOTZG3tEqjFPQ")
//     .then(res => res.json())
//     .then(data => console.log(data))
//     .then(data => img.src = data[]);

fetch("https://api.thecatapi.com/v1/images/search")
  .then((res) => res.json())
  .then((data) => (cat1.src = data[0].url))

fetch("https://api.thecatapi.com/v1/images/search")
    .then((res) => res.json())
    .then((data) => (cat2.src = data[0].url));