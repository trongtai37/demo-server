const fetch = require('node-fetch');
const PORT = 8000;

fetch(`http://localhost:${PORT}/`)
  .then((data) => data.json())
  .then((res) => {
    console.log(res);
    console.log('Tranfer data between server and clietn successfully!');
  })
  .catch((err) => console.log(err));
