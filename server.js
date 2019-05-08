const artworks = require('./artworksForServer.js');
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 4008;

app.get('/artworks', cors(), (req, res) => {
  res.send({artworks});
});

app.listen(PORT, ()=> {
  console.log(`Listening on ${PORT}`);
});
