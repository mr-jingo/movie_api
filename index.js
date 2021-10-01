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
