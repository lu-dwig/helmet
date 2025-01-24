const express = require('express');
const helmet = require('helmet');
const app = express();

// Add your middleware here
app.use(helmet.hidePoweredBy());

// Add your Frameguard here
app.use(helmet.frameguard({action: 'deny'}))

// Add your X-XSS-Protection here 
app.use(helmet.xssFilter())

// Add your MIME sniffing protection here
app.use(helmet.noSniff())

// Add your Content Security Policy "Prevent IE from Opening Untrusted HTML" here
app.use(helmet.ieNoOpen())

// Add your https strict mode here
const timeInSeconds = 90 * 24 * 60 * 60;
app.use(helmet.hsts({maxAge: timeInSeconds, force: true}));

// Add your DNS prefetching disablepolicy here
app.use(helmet.dnsPrefetchControl());

// Add your client Side Cache Disable Policy here
app.use(helmet.noCache());
























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
