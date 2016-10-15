'use strict';
var allPictures = [];
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
new Randompicture('chair', 'images/cthulhu.jpg');
new Randompicture('chair', 'images/dog-duck.jpg');
new Randompicture('chair', 'images/pen.jpg');
new Randompicture('chair', 'images/pet-sweep.jpg');
new Randompicture('chair', 'images/scissors.jpg');
new Randompicture('chair', 'images/shark.jpg');
new Randompicture('chair', 'images/sweep.jpg');
new Randompicture('chair', 'images/tauntaun.jpg');
new Randompicture('chair', 'images/unicorn.jpg');
new Randompicture('chair', 'images/usb-duck.jpg');
new Randompicture('chair', 'images/water-can.jpg');
new Randompicture('chair', 'images/wine-glass.jpg');

function renderFirstPic () {
  var parentRenderEl = document.getElementById('img1');
  var childRender = allPictures.src[0];
  parentRenderEl.appendChild(childRender);
}
renderFirstPic();
