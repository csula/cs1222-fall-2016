const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('mongodb');
const mysql = require('mysql');
const MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  database : 'lyrics'
});
connection.connect();
var mongoDbInstance;

// Connection URL
const url = 'mongodb://localhost:27017/grades';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected successfully to server");
  mongoDbInstance = db;
});

const app = express();

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use('/', express.static('front-end'));

// in memory grades
app.get('/api/grades', (req, res) => {
    res.json([{name: 'eric', grade: 99}]);
});

app.get('/api/mysql/artists', (req, res) => {
    connection.query('SELECT * FROM Artists', (err, rows) => {
        if (err) {
            res.status(503).json(err);
        } else {
            res.json(rows);
        }
    });
});

app.get('/api/mongo/grades', (req, res) => {
    mongoDbInstance.collection('grades')
        .find({}).toArray((err, docs) => {
            if (err) {
                res.status(503).json(err);
            } else {
                res.json(docs);
            }
        });
});
app.post('/api/mongo/grades', (req, res) => {
    mongoDbInstance.collection('grades')
        .insertOne(req.body, (err, r) => {
            if (err) {
                res.status(503).json(err);
            } else {
                res.json(r);
            }
        });
});
app.delete('/api/mongo/grades/:id', (req, res) => {
    console.log(req.params);
    mongoDbInstance.collection('grades')
        .deleteOne({_id: new mongodb.ObjectID(req.params.id)}, (err, r) => {
            if (err) {
                res.status(503).json(err);
            } else {
                res.json(r);
            }
        })
});

app.listen(3000);