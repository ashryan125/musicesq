const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const path = require('path');
const helpers = require('./utils/helpers')
const exphbs = require('express-handlebars');
const session = require('express-session');
const hbs = exphbs.create({ helpers });

const app = express();
const PORT = process.env.PORT || 3005;
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'SecretKey',
  cookie: { maxAge: 200000 },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(routes);


//Spotify

//Spotify dependencies
var SpotifyWebApi = require('spotify-web-api-node');

var spotifyApi = new SpotifyWebApi({
  clientId: process.env['clientID'],
  clientSecret: process.env['clientSecret'],
  redirectUri: process.env['redirect']
})

// Getting access token
spotifyApi.clientCredentialsGrant().then(
  function (data) {

    //putting token into env variable
    process.env['spotifyAccess'] = data.body.access_token;

    //setting access token with node pkg
    spotifyApi.setAccessToken(data.body.access_token);
    console.log(spotifyApi.access_token)

    //console logs to give access info to dev
    console.log('The access token expires in ' + data.body['expires_in']);
   console.log('The access token is ' + data.body['access_token']);
  })

//track search, needs variable to pass in from input
// spotifyApi.searchTracks('???')
//   .then(function (data) {
//     console.log('Search by "???"', data.body);
//   }, function (err) {
//     console.error(err);
//   });

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening on port ' + PORT));
});