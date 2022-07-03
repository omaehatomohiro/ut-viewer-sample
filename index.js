const path = require('path');
const express = require('express');
const app = express();
const router = express.Router();

const server = app.listen(3000, function(){
  console.log('Nodejs listen on port ' + server.address().port);
});

router.use(express.static('public'));

app.use('/', router);