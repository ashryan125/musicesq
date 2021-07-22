const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const path = require('path');
const base64 = require('js-base64');
let http = require('http');

const app = express();
const PORT = process.env.PORT || 3001;

const exphbs = require('express-handlebars');
const hbs = exphbs.create({});

app.use(express.static(path.join(__dirname, 'public')));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// spotify

let client64 = Buffer.from(process.env['clientID'], base64);
let secret64 = Buffer.from(process.env['clientID'], base64);

const options = {
  hostname: 'https://accounts.spotify.com/api/token',
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization': 'Basic ' + client64 + ':' + secret64,
    'grant_type' : 'client_credentials',
  }
};

const req = http.request(options, (res) => {
  res.setEncoding('utf8');
  // process the data bit by bit or in chunks...
  res.on('data', (chunk) => {});
  // ...and do something with it when there is no more data in response
  res.on('end', () => {
   console.log('No more data in response.');
  });
});

// handle the error explicitly
req.on('error', (e) => {
  console.error(`problem with request: ${e.message}`);
});

req.end();

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});