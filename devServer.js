const express = require('express')
const app = express()
const path = require('path')

/*
app.use(express.static('dist'))
app.use(express.static('examples'))
app.get('/', function (req, res) {
  res.sendFile( __dirname + "/" + "index.html" );
})
const server = app.listen(3200, () => {
  console.log('localhost:3200')
})*/
app.get('/', function (req, res) {
  res.send('Hello World2!');
});
app.use('/static', express.static(__dirname + '/dist'))
app.use(express.static(__dirname + '/demo'))

const server = app.listen(3200, function () {
  console.log('listening at http://localhost:3200/');
});