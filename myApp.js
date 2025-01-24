const express = require('express');
const helmet = require('helmet');
const app = express();

// Add your middleware here
app.use(helmet.hidePoweredBy());

// Add your Frameguard here
app.use(helmet.frameguard({action: 'deny'}))

// Add your X-XSS-Protection here 
app.use(helmet.xssFilter)












































module.exports = app;
const api = require('./server.js');
app.use(express.static('public'));
app.disable('strict-transport-security');
app.use('/_api', api);
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`InfoSec Server is running on port ${port}`);
});
