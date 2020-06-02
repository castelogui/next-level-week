import express from 'express';

const app = express();

app.get('/users', (request, response) => {
  console.log('Listagem de usuarios!');

  // JSON

  response.json([
    'guilherme',
    'gustavo', 
    'beatriz',
    'daniel'
  ])
});

app.listen(3333);
