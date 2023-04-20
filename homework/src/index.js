const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 3000;

app.use(morgan('combined'));

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.get('/about', (req, res) => {
  res.send('Hello, this is about');
});
app.get('/contact', (req, res) => {
  res.send(" Hello, I'm Teddy");
});
app.get('/help', (req, res) => {
  res.send('Hello, this is help');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
