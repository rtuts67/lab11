'use strict';
var allPictures = [];
var Randompicture = function(name, src) {
  this.name = name;
  this.src = src;
  allPictures.push(this);
};

new Randompicture('r2D2', 'images/bag.jpg');

function renderFirstPic () {
  var parentRenderEl = document.getElementById('img1');
  var childRender = allPictures.src[0];
  parentRenderEl.appendChild(childRender);
}
renderFirstPic();
