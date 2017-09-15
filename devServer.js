const express = require('express')
const app = express()
const path = require('path')

app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.use('/static', express.static(__dirname + '/dist'))
app.use(express.static(__dirname + '/demo'))

const server = app.listen(3200, function () {
  console.log('listening at http://localhost:3200/')
});

const assert = require('assert');

/*const obj1 = {
  a: {
    b: {
      c: {
        d:1
      }
    }
  }
};
const obj2 = {
  a: {
    b: 2
  }
};
const obj3 = {
  a: {
    b: {
      c: {
        d:1
      }
    }
  }
};
const obj4 = Object.create(obj1);*/


// assert.deepEqual(obj1, obj3);
// 通过，两个对象相等
