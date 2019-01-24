// New Code using IIFE

var starwarsRepository = (function () {
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
    }
  ];

 function add(character) {
   characters.push(character);
 }

 function getAll() {
   return characters;
 }

 return {
   add: add,
   getAll: getAll
 };
})();

// forEach() function

starwarsRepository.getAll().forEach(function(character) {
  var highlight = '<span class="highlight"> I am Lukes father!</span>';

  if (character.name === 'Darth Vader') {
    document.write('<div class="content__item"><p>Name: ' + character.name + highlight + '</p><p>Height: ' + character.height + '</p></div>');
  } else {
    document.write('<div class="content__item"><p>Name: ' + character.name + '</p><p>Height: ' + character.height + '</p></div>');
  }
});
