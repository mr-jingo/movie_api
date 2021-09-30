const express = require('express');
const app = express();

let topMovies = [
  {
    title: 'Conan the Barbarian',
    director: 'John Milius'
  },
  {
    title: 'Aliens',
    director: 'James Cameron'
  },
  {
    title: 'Inception',
    director: 'Christopher Nolan'
  },
  {
    title: 'American Beauty',
    director: 'Sam Mendes'
  },
  {
    title: 'High Fidelity',
    director: 'Stephen Frears'
  },
  {
    title: 'Staying Alive',
    director: 'Sylvester Stallone'
  },
  {
    title: 'Matrix',
    director: 'Die Wachowskis'
  },
  {
    title: 'The Big Lebowski',
    director: 'Joel Coen'
  },
  {
    title: 'Indiana Jones and the Temple of Doom',
    director: 'Steven Spielberg'
  },
  {
    title: 'The Empire Strikes Back',
    director: 'Irvin Kershner'
  }
];

app.use(express.static('public'));
app.use(morgan('common'));
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.get('/', (req, res) => {
  res.send('Welcome to my myFlix !');
});

app.get('/books', (req, res) => {
  res.json(topMovies);
});

app.listen(8080, () => {
  console.log('Your app is listening on port 8080.');
});
