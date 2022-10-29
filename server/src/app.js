const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static(path.join(__dirname, '../public/client')));

app.get('/client', (req, res) => {
  res.sendFile('index.html');
});

app.get('/', (req, res) => {
  res.redirect('/client');
});

module.exports = app;
