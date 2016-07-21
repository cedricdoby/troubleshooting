'use strict';

var http = require('http').Server(app),
fs = require('fs');
var express = require('express');
var app = express(3000);
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');





app.get('/', function(req,res){
  console.log('hey');
  res.sendFile(__dirname + '../index.html')
});

app.get('/about', function(req,res){
  res.sendfile('/Users/Cedric/Desktop/fortuneProject/app/views/about.html')
  });
app.get('/fortune', function(req,res) {
  findFortune(function(fortune) {
    res.end(JSON.stringify({
      fortune: fortune
    }));
  });
});
app.get('/contacts', function(req,res){
  res.sendfile('/Users/Cedric/Desktop/fortuneProject/app/views/contacts.html')
});
var url = 'mongodb://localhost:27017/myDB';
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server.");
  db.close();
});

function findFortune (callback) {
  MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    var cursor = db.collection('fortune')
     .aggregate([{ $sample: { size: 1 } }]);

    cursor.nextObject(function (err, doc) {
      db.close();
      assert.equal(err, null);
      callback(doc.Fortune);
    });
  });


};




app.listen(3000);
