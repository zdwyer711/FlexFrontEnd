import axios from 'axios';

const setUserData = require('./setUserData');
const getUserData = require('./getUserData');

const getTrackSearchSet = async ( accessToken, searchTerm ) => {
      // const accessToken = await getUserData('accessToken');
      console.log(searchTerm);
      let spotifyTrackSearchSetEndpoint = 'http://192.168.1.65:3000/getTracks/api/spotify-tracks/0/' + accessToken + '/' + searchTerm;
      console.log(spotifyTrackSearchSetEndpoint);
      const res = await axios.get(spotifyTrackSearchSetEndpoint)
          .then(function (response) {
              if(parseInt(response.status) == 200) {
                console.log(response);
                return response;
              }
          })
          .catch(function (error) {
              console.log("Error Occured Fetching!")
              console.log(error);
              return error;
          });
      console.log(res.data);
      // if((parseInt(res.status) == 400) || (parseInt(res.status) == 401)){
      //     alert("Unable to Authenticate via Spotify: " + res.data);
      // } else {
      //     console.log(res);
      // }
}

module.exports = getTrackSearchSet;
