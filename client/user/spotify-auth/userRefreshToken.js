import { encode as btoa } from 'base-64';
import axios from 'axios';
//const getSpotifyCredentials = require('../../data/getSpotifyCredentials');
//const getTokens = require('./getTokens');
const setUserData = require('./../setUserData');
const getUserData = require('./../getUserData');
const getNewUserToken = require('./getNewUserToken');
const clearLocalUserData = require('./../clearLocalUserData');

const userRefreshToken = async () => {
  try {
    await clearLocalUserData('refreshToken');
    const refreshToken = await getUserData('refreshToken');
    let refreshTokenEndpoint = 'http://192.168.1.65:3000/getTokens/api/spotify-tokens?refreshToken=' + refreshToken;

    const res = await axios.get(refreshTokenEndpoint)
        .then(function (response) {
            if(parseInt(response.status) == 200){
              //console.log(response);
              return response;
            }
        })
        .catch(function (error) {
            console.log("Error Occured Fetching!")
            // console.log(error.response);
            return error.response;
        });

        if((parseInt(res.status) == 400) || (parseInt(res.status) == 401)){
            console.log("Before getNewUserToken()");
            await getNewUserToken();
        } else {

            const {
              access_token: newAccessToken,
              refresh_token: newRefreshToken,
              expires_in: expiresIn,
            } = res.data;

        const expirationTime = new Date().getTime() + expiresIn * 1000;
        await setUserData('accessToken', newAccessToken);
        if (newRefreshToken) {
          await setUserData('refreshToken', newRefreshToken);
        }
          await setUserData('expirationTime', expirationTime);
        }

  } catch (err) {
    console.error(err)
  }
}

module.exports = userRefreshToken;
