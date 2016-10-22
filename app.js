'use strict';

var Randompicture = function(name, path) {
  this.name = name;
  this.path = path;
  this.votes = 0;
  trackvotes.allPictures.push(this);
};

var trackvotes = {
  allPictures: [],
  img1: document.getElementById('img1'),
  img2: document.getElementById('img2'),
  img3: document.getElementById('img3'),
  getResults: document.getElementById('sec1'),
  getButton: document.getElementById('results'),

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
  createIndex: function(array) {
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
  },

  renderPics: function () {
    var index = this.createIndex(this.allPictures);
    var imageOne = this.allPictures[index[0]];
    var imageTwo = this.allPictures[index[1]];
    var imageThree = this.allPictures[index[2]];

    this.img1.src = imageOne.path;
    this.img2.src = imageTwo.path;
    this.img3.src = imageThree.path;

    this.img1.id = imageOne.name;
    this.img2.id = imageTwo.name;
    this.img3.id = imageThree.name;
  },

  keepTrackOfVotes: function (id) {
    for (var i = 0; i < this.allPictures.length; i++) {
      if (this.allPictures[i].name === id) {
        this.allPictures[i].votes += 1;
      }
    }
  },
};

trackvotes.getResults.addEventListener('click', function(event) {
  if (event.target.id !== 'thing') {
    trackvotes.keepTrackOfVotes(event.target.id);
    trackvotes.renderPics();
  }
});
trackvotes.createNewPictures();
trackvotes.renderPics();
