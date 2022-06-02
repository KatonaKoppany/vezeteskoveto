require('dotenv').config();
const express = require('express');
const path = require('path');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

var pool = mysql.createPool({
    host: process.env.DBHOST,
    user: process.env.DBUSER,
    password: process.env.DBPASS,
    database: process.env.DBNAME,
});

//LOGIN
app.post('/login', function (req, res) {});

//GET ONE RECORD
app.get('/:table/:field/:value', (req, res) => {});

//INSERT INTO RECORD
app.post('/table', (req, res) => {});

//UPDATE RECORD
app.patch('/table/:id', (req, res) => {});

//DELETE RECORD
app.delete('/:table/:id', (req, res) => {});

app.listen(port, () => {
    console.log(`Server listening on ${port}...`);
});
