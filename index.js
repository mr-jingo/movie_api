const express = require('express');
const app = express();

let topMovies = [
  {
    id: 1,
    title: 'Conan the Barbarian',
    director: 'John Milius'
  },
  {
    id: 2,
    title: 'Aliens',
    director: 'James Cameron'
  },
  {
    id: 3,
    title: 'Inception',
    director: 'Christopher Nolan'
  },
  {
    id: 4,
    title: 'American Beauty',
    director: 'Sam Mendes'
  },
  {
    id: 5,
    title: 'High Fidelity',
    director: 'Stephen Frears'
  },
  {
    id: 6,
    title: 'Staying Alive',
    director: 'Sylvester Stallone'
  },
  {
    id: 7,
    title: 'Matrix',
    director: 'Die Wachowskis'
  },
  {
    id: 8,
    title: 'The Big Lebowski',
    director: 'Joel Coen'
  },
  {
    id: 9,
    title: 'Indiana Jones and the Temple of Doom',
    director: 'Steven Spielberg'
  },
  {
    id: 10,
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
  res.send('Welcome to my myFlix!');
});

app.get('/movies', (req, res) => {
  res.json(topMovies);
});

app.get('/movies/:title', (req, res) => {
  res.json();
});

app.get('/users', (req, res) => {
  res.json();
});

app.get('/users/:name', (req, res) => {
  res.json();
});

app.post('/users', (req, res) => {
  res.json();
});

app.post('/users/:name/movies/:movieId', (req, res) => {
  res.json();
});

app.put('/users/:name', (req, res) => {
  res.send('User was updated');
});

app.delete('/users/:name', (req, res) => {
  res.send('User was deleted');
});

app.delete('/users/:name/movies/:movieId', (req, res) => {
  res.send('Movie was deleted');
});

app.listen(8080, () => {
  console.log('Your app is listening on port 8080.');
});
