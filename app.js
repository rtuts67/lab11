'use strict';
var allPictures = [];
var randomArray = [];
var Randompicture = function(name, src) {
  this.name = name;
  this.src = src;
  allPictures.push(this);
};

new Randompicture('r2D2', 'images/bag.jpg');
new Randompicture('banana', 'images/banana.jpg');
new Randompicture('bathroom', 'images/bathroom.jpg');
new Randompicture('boots', 'images/boots.jpg');
new Randompicture('breakfeast', 'images/breakfast.jpg');
new Randompicture('bubblegum', 'images/bubblegum.jpg');
new Randompicture('chair', 'images/chair.jpg');
new Randompicture('cthulhu', 'images/cthulhu.jpg');
new Randompicture('dogduck', 'images/dog-duck.jpg');
new Randompicture('dragon', 'images/dragon.jpg');
new Randompicture('pen', 'images/pen.jpg');
new Randompicture('petsweep', 'images/pet-sweep.jpg');
new Randompicture('scissors', 'images/scissors.jpg');
new Randompicture('shark', 'images/shark.jpg');
new Randompicture('sweep', 'images/sweep.png');
new Randompicture('tauntaun', 'images/tauntaun.jpg');
new Randompicture('unicorn', 'images/unicorn.jpg');
new Randompicture('usb', 'images/usb.gif');
new Randompicture('water', 'images/water-can.jpg');
new Randompicture('wineglass', 'images/wine-glass.jpg');

function getRandomImage(path) {
  var number = Math.floor( Math.random() * allPictures.length );
  path = allPictures[number].src;
  var imgStr = '<img src="' + path + '" alt = "">';;
  document.write(imgStr); document.close();
};
getRandomImage(allPictures);

function randomPictures() {
  for (var i = 0; i < 2; i++) {
    randomArray.push(getRandomImage(allPictures));
  }
};

randomPictures();

function renderFirstPic () {
  var parentRenderEl = document.getElementById('img1');
  var childRender = randomArray[0];
  parentRenderEl.appendChild(childRender);
}
renderFirstPic();

function renderSecondPic () {
  var parentRenderEl2 = document.getElementById('img2');
  var childRender2 = randomArray[1];
  parentRenderEl2.appendChild(childRender2);
}
renderSecondPic();

function renderThirdPic () {
  var parentRenderEl3 = document.getElementById('img3');
  var childRender3 = randomArray[2];
  parentRenderEl3.appendChild(childRender3);
}
renderThirdPic();
