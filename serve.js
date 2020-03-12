require('dotenv').config();

const express = require('express');
const router = require('./routes');
const cors = require('cors');

const Book = require('./src/model/bookModel');

// Data BD
const connection = require('./config/connection');

const app = express();
const door = process.env.PORTHOST;

app.use(cors());
app.use(express.json());
app.use(router);

// Data models
Book.init(connection);

app.listen(door, ()=>{
    console.log(`Servidor rodando na porta - http://localhost:${door}`);
})