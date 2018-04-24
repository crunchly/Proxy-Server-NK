const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const fetch = require('node-fetch');
const port = process.env.PORT || 3000;

app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/funding-rounds/:company', (req, res) => {
	console.log('hello');
  fetch(`http://localhost:3001${req.originalUrl}`)
    .then(fetchRes => fetchRes.json())
    .then(data => res.send(data));

});


app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});