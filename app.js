'use strict';

console.log('I am loaded!!');

let ducks = [];
let image1 = document.getElementById('image1');
let image2 = document.getElementById('image2');

// constructor function -> 'this' is the object we are creating.
function Duck(url, name) {
  this.url = url;
  this.name = name;
  this.clicks = 1;
}

let odd1 = new Duck('img/bag.jpg', 'bag');
let odd2 = new Duck('img/banana.jpg', 'banana');
let odd3 = new Duck('img/boots.jpg', 'boots');
let odd4 = new Duck('img/breakfast.jpg', 'Breakfast');
let odd5 = new Duck('img/bubblegum.jpg', 'gum');
let odd6 = new Duck('img/cthulhu.jpg', 'green vampire');
let odd7 = new Duck('img/dog-duck.jpg', 'duck-dog');
let odd8 = new Duck('img/dragon.jpg', 'dragon');
let odd9 = new Duck('img/pen.jpg', 'pen');
let odd10 = new Duck('img/pet-sweep.jpeg', 'pet');
let odd11 = new Duck('img/scissors.jpg', 'pizza scissors');
let odd12 = new Duck('img/shark.jpg', 'shark');
let odd13 = new Duck('img/sweep.png', 'sweep');
let odd14 = new Duck('img/tauntaun.jpg', 'taun');
let odd15 = new Duck('img/unicorn.jpg', 'uni');
let odd16 = new Duck('water-can.jpg', 'watercan');
let odd17 = new Duck('wine-glass.jpg', 'wine');

ducks.push(odd1, odd2, odd3, odd4, odd5, odd6, odd7, odd8, odd9, odd10,
     odd11, odd12, odd12, odd13, odd14, odd15, odd16, odd17);

// render the goat onto the page / add the name
image1.setAttribute('src', odd1.url);
image2.setAttribute('src', odd2.url);
image3.setAttribute('src', odd3.url);

console.log(ducks);


// add an event listener that runs some code when a goat picture is clicked.
let oddImages = document.getElementById('odd');

// when might you remove the event listener from the OddImages HTML element
// oddImages.removeEventListener()

oddImages.addEventListener('click', function(event) {
  event.preventDefault();
  console.log(event.target.alt); // event.target -> whatever element was interacted with.

  // add 1 to number of clicks
    // search our array of ducks for the goat object that matched the alt
  findGoat(event.target.alt);

  // show 2 different images after a picture is clicked.
  renderNewDucks();
});

function findGoat(alt) {
  for (let i =0; i< ducks.length; i++) {
    if (ducks[i].name === alt) {
      ducks[i].clicks++;
    }
  }
  console.log(ducks);
}

function renderNewDucks() {
  // generate a random index betwee 0 and the length of our ducks array
  let index1 = Math.floor(Math.random() * ducks.length);
  let index2 = Math.floor(Math.random() * ducks.length);
  while(index1 === index2) {
    index1 = Math.floor(Math.random() * ducks.length);
    index2 = Math.floor(Math.random() * ducks.length);
  }
  let randomGoat1 = ducks[index1];
  let randomGoat2 = ducks[index2];
  console.log(randomGoat1, randomGoat2);

  // render the goat onto the page / add the name
  image1.setAttribute('src', randomGoat1.url);
  image2.setAttribute('src', randomGoat2.url);
  image1.setAttribute('alt', randomGoat1.name);
  image2.setAttribute('alt', randomGoat2.name);
}
