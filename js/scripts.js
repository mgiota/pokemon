var repository = [
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

var highlight = '<span>(I am Lukes father!)</span>'

for (var i = 0; i < repository.length; i++) {
  if (repository[i].name === 'Darth Vader') {
    document.write('<div><p>Name: ' + repository[i].name + highlight + '</p><p>Height: ' + repository[i].height + '</p></div>');
  } else {
    document.write('<div><p>Name: ' + repository[i].name + '</p><p>Height: ' + repository[i].height + '</p></div>');
  }
};
