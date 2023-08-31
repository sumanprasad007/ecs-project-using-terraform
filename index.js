'use strict';

var express = require('express');
var app = express();

app.get('/', function(req, res) {
  // Define your inline CSS for the gradient background
  var inlineCSS = `
    <style>
      body {
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        background: linear-gradient(to bottom, #2980b9, #3498db);
        font-family: Arial, sans-serif;
        color: #ffffff;
        text-align: center;
      }

      h1 {
        font-size: 3em;
        margin-bottom: 20px;
      }

      p {
        font-size: 1.5em;
      }
    </style>
  `;

  // Define the HTML content for the landing page
  var html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Node Express Landing Page</title>
    </head>
    <body>
      ${inlineCSS}
      <div>
        <h1>Welcome to Our Node Express App</h1>
        <p>Hello Everyone, hope you are doing well. This is a Node Express application running on port 3000. This application is backed with GitHub Action as a CI/CD Pipeline, which continuously monitors and updates the changes to the server.</p>
      </div>
    </body>
    </html>
  `;

  res.send(html);
});

/* istanbul ignore next */
if (!module.parent) {
  app.listen(3000);
  console.log('Express started on port 3000');
}
