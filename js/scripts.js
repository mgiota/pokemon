// New Code using IIFE

var starwarsRepository = (function () {
// Array with Star Wars Characters as Objects
  var characters = [
    {
      name: 'Luke Skywalker',
      height: 172,
      mass: 77,
      gender: "male"
    },
    {
      name: 'C-3PO',
      height: 167,
      mass: 75,
      gender: "n/a"
    },
    {
      name: 'Darth Vader',
      height: 202,
      mass: 136,
      gender: "male"
    },
    {
      name: 'R2-D2',
      height: 96,
      mass: 32,
      gender: "n/a"
    },
    {
      name: 'Chewbacca',
      height: 228,
      mass: 112,
      gender: "male"
    }
  ];
// function to add characters
 function add(character) {
   characters.push(character);
 }
// function to select characters
 function getAll() {
   return characters;
 }
// function to add List item to DOM
  function addListItem(character) {
    var $unorderedList = document.querySelector('ul');
    // create necessary elements
    var $newListElement = document.createElement('li');
    var $newSpanElement = document.createElement('span');
    var $newButtonElement = document.createElement('button');
    // inner text for elements
    $newButtonElement.innerText = '+';
    $newSpanElement.innerText = character.name;
    // add the classes
    $newListElement.classList.add('content__item');
    $newButtonElement.classList.add('content__item--button');
    //append new elements
    $unorderedList.appendChild($newListElement);
    $newListElement.appendChild($newSpanElement);
    $newListElement.appendChild($newButtonElement);
    // add event listener
    $newButtonElement.addEventListener('click', function (event) {
      showDetails(character.name);
    });
  }
  // function for showing the details of the characters
  function showDetails(character) {
    console.log(character);
  }

 return {
   add: add,
   getAll: getAll,
   addListItem: addListItem,
   showDetails: showDetails
 };
})();

// forEach() function to create the elements for the DOM
starwarsRepository.getAll().forEach(function(character) {
  starwarsRepository.addListItem(character);
});
