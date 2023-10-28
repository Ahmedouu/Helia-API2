const express = require('express');
const localtunnel = require('localtunnel');

const app = express();

app.get('/testing', (req, res) =>{
  
  console.log('we received a request')
  res.send('Hello World!')});

app.listen(3000,  async () => {
  const tunnel = await localtunnel({ port: 3000 });
  console.log(`Express app is accessible from ${tunnel.url}`);
});
