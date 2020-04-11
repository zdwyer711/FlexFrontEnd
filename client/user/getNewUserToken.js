//import { encode as btoa } from 'base-64';
import axios from 'axios';
//const getSpotifyCredentials = require('../../data/getSpotifyCredentials');
const responseCheck = require('../../data/responseCheck');
const setUserData = require('./setUserData');
const getUserData = require('./getUserData');
const getUserAuthCode = require('./getUserAuthCode');
const postNewUser = require('./postNewUser') ;

const getNewUserToken = async () => {
      const authorizationCode = await getUserAuthCode();
      //const authorizationCode = 'AQAnxFGGS9ri1X5BqTzbuXLwYeRN6zEjnHTzDqnP0ZaMhYgDw4SfCvlXN4H-XocOpyi5NMlQZtwK0kmnKWdrF8-Qxf1u4dwxPxsR0KKc-XUuknfgjmYeETAS4ME_ZUtH9DIhyRGO8TasHfPWOjxzWyrPMql2dlihXlnajpRD2Fsbmu36gBhS7DnQeTwpb61yWQjN9agDItKPq2kqOPcjELF1HMq5VeHuLknvhOyYST4wdmUavgTSzsOX7RYnAf6lTLl9Iq4xrtfFxS2hYw9fjYmECuAluBVVIwpKSIcsHTxcCeitDeGXpMuyNkmDP3T9G9_2vRHZ37Zsp1QKuCbsG7Gz6Eq-xq0HcXi9V5sH3_QYhhXXd9N1MBJLl0mLZkizBLcXNqhT_2VurtDru9gFa9F0-B_KL4tWZPibmrN_xUuZlWzX1wTmztkbvaR5JCnMLRnJpLLe-mAekXy2Ol456eF176wMgScsaSXQQ2R-l_utq4m42TttCo0H_wSZtJVQUZCjqVuM7DbZTeLpF0tkVFXU-mNOcIT6KRF8sCh8nj9fBC_aA7GWr3BG0-0';
      await setUserData('userId','007');
      await setUserData('LastName','Dwyer');
      await setUserData('FirstName','Zach');
      console.log("<----getNewUserToken-->");
      let spotifyTokenEndpoint = 'http://192.168.1.65:3000/getTokens/api/spotify-tokens?authCode=' + authorizationCode;
      const res = await axios.get(spotifyTokenEndpoint)
          .then(function (response) {
              if(parseInt(response.status) == 200){
                console.log(response);
                return response;
              }
          })
          .catch(function (error) {
              console.log("Error Occured Fetching!")
              console.log(error.response);
              return error.response;
          });

      if((parseInt(res.status) == 400) || (parseInt(res.status) == 401)){
          alert("Unable to Authenticate via Spotify: " + res.data);
      } else {
        //destructure the response and rename the properties to be in camelCase to satisfy my linter ;)
        console.log(res.data);

        const accessToken = res.data.access_token;
        const refreshToken = res.data.refresh_token;
        const expiresIn = res.data.expires_in;

        // const {
        //   access_token: accessToken,
        //   refresh_token: refreshToken,
        //   expires_in: expiresIn,
        // } = res.data;

        const expirationTime = new Date().getTime() + expiresIn * 1000;
        await setUserData('accessToken', accessToken.toString());
        await setUserData('refreshToken', refreshToken.toString());
        await setUserData('expirationTime', expirationTime.toString());
        await postNewUser();
      }
}

// //const statusIntercept = async (response) => {
// function statusIntercept(spotifyTokenEndpoint){
//     const response = await requestPromise.get(spotifyTokenEndpoint);
//     // Any status code that lie within the range of 2xx cause this function to trigger
//     // Do something with response data
//     console.log("<-----StatusIntercept()----->");
//     console.log(response);
//     return response;
//     // }, function (error) {
//     // console.log("StatusIntercept() Error!");
//     // console.log(error);
//     // // Any status codes that falls outside the range of 2xx cause this function to trigger
//     // // Do something with response error
//     // return Promise.reject(error);
// }

module.exports = getNewUserToken;
