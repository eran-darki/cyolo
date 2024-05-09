const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();

app.use(bodyParser.json());

app.post('/save', function(req, res) {
  const counters = req.body;
  fs.writeFile('counters.json', JSON.stringify(counters), function(err) {
    if (err) {
      console.error(err);
      res.status(500).send('Error saving file.');
    } else {
      res.send('File saved successfully.');
    }
  });
});

app.listen(3000, function() {
  console.log('Server listening on port 3000');
});