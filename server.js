const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const fetch = require('node-fetch');
const port = process.env.PORT || 8000;

app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/funding-rounds/:company', (req, res) => {
  fetch(`http://ec2-13-57-175-222.us-west-1.compute.amazonaws.com${req.originalUrl}`)
    .then(fetchRes => fetchRes.json())
    .then(data => res.send(data));

});

app.use('/overview/:orgId', (req, res) => {
  fetch(`http://ec2-54-219-172-244.us-west-1.compute.amazonaws.com${req.originalUrl}`)
    .then(fetchRes => fetchRes.json())
    .then(data => res.send(data));
});

app.use('/api/funding_round/', (req, res) => {
  fetch(`http://ec2-13-59-188-143.us-east-2.compute.amazonaws.com${req.originalUrl}`)
    .then(fetchRes => fetchRes.json())
    .then(data => res.send(data));

});

app.use('/people/:org', (req, res) => {
  fetch(`http://ec2-52-34-86-177.us-west-2.compute.amazonaws.com${req.originalUrl}`)
    .then(response => response.json())
    .then(data => res.send(data));
});

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});