const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('sequelize');
const models = require('./models');
const animalController = require('./controllers/animal');

const app = express();

app.use(bodyParser.json());


app.get('/animals', animalController.list);
app.get('/animals/:id', animalController.detail);
app.post('/animals', animalController.create);

app.listen(3000);
