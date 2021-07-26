const router = require("express").Router();
const sequelize = require("../../config/connection");
const { Post, User, Comment, Votes } = require("../../models");
const withAuth = require("../../utils/auth");
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
router.get("/:song", (req, res) => {
  let query = req.params.song
  spotifyApi.searchTracks(query, { limit: 10 }, function (err, data) {
    if (err) {
      console.log("ERROR: " + err)

    } else {
      let songData = data
      console.log(songData);
    }
  })

});
module.exports = router;