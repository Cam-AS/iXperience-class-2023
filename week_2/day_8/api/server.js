const express = require('express');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/posts', (req, res) => {
  res.send({
    name: 'Cameron',
    surname: 'Kirkpatrick',
    age: 29,
    title: 'Software Enginner',
  });
});

app.listen(port, () => {
  console.log('Listening on port 3001');
});
