'use strict';

var Randompicture = function(name, path) {
  this.name = name;
  this.path = path;
  this.votes = 0;
  trackvotes.allPictures.push(this);
};

var trackvotes = {
  allPictures: [],

  createNewPictures: function() {
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
  },

  getRandomNumber: function() {
    return Math.floor(Math.random() * this.allPictures.length);
  },
  createIndexes: function(array) {
    var index1 = this.getRandomNumber(array);
    var index2 = this.getRandomNumber(array);
    while (index2 === index1) {
      index2 = this.getRandomNumber(array);
    };

    var index3 = this.getRandomNumber(array);
    while (index3 === index2 || index3 === index1) {
      index3 = this.getRandomNumber(array);
    };
    return [index1, index2, index3];
  }
};
  //randomPictures: function () {
    //for (var i = 0; i < 2; i++) {
      //this.randomArray.push(this.getRandomNumber(this.allPictures[i]));
    //}
  //},

  //renderPics: function () {
    //var parentRenderEl = document.getElementById('img1');
    //trackvotes.img1.src = trackvotes.path;
    //var childRender =
    //parentRenderEl.appendChild(childRender);

    //var parentRenderEl2 = document.getElementById('img2');
    //this.img2.src = trackvotes.randomArray[1].path;
  //  var childRender2 = trackvotes.randomArray[1];
  //  parentRenderEl2.appendChild(childRender2);

  //  var parentRenderEl3 = document.getElementById('img3');
  //  trackvotes.img3.src = trackvotes.randomArray[3].path;
  //  var childRender3 = trackvotes.randomArray[3];
  //  parentRenderEl3.appendChild(childRender3);
//  },
//};

trackvotes.createNewPictures();
//trackvotes.randomPictures();
//trackvotes.renderPics();
