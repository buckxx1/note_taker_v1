const express = require('express');
const PORT = process.env.PORT || 3007; 
const app = express(); // starts server
const routes = require('./routes/noteRoutes');

app.use(express.urlencoded({ extended: true }));// parse data

app.use(express.json());// parse incoming JSON data
app.use(express.static('Develop/public')); 

app.use('/', routes);

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });
  