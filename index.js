'use strict'

var express = require('express')
var app = express()

app.get('/', function(req, res){
  res.send('Hello Everyone, hope you are doing well. This is a Node Express application runnng on port 3000. This application is backed with GitHub Action as CICD Pipeline, which continously monitors and updates the changes to the server')});

/* istanbul ignore next */
if (!module.parent) {
  app.listen(3000);
  console.log('Express started on port 3000');
}
