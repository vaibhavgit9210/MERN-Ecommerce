import express from 'express';
import colors from 'colors';

const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Welcome to jungle</h1>');
});

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`.bgGreen.white);
});
