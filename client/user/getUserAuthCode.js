import { AuthSession } from 'expo';

const scopesArr = ['user-modify-playback-state','user-read-currently-playing','user-read-playback-state','user-library-modify',
                   'user-library-read','playlist-read-private','playlist-read-collaborative','playlist-modify-public',
                   'playlist-modify-private','user-read-recently-played','user-top-read'];
const scopes = scopesArr.join(' ');
const getSpotifyCredentials = require('../../data/getSpotifyCredentials');
const setUserData = require('./setUserData');

const getUserAuthCode = async () => {
  try {
    const credentials = await getSpotifyCredentials(); //we wrote this function above
    const redirectUrl = AuthSession.getRedirectUrl(); //this will be something like https://auth.expo.io/@your-username/your-app-slug
    console.log("Before Result Reached!");
    const result = await AuthSession.startAsync({
      authUrl:
        'https://accounts.spotify.com/authorize' +
        '?response_type=code' +
        '&client_id=' +
        credentials.clientId +
        (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
        '&redirect_uri=' +
        encodeURIComponent(redirectUrl),
    })
    console.log("=======Result Auth========");
    console.log(result.params);
    console.log("===============================");
    return result.params.code;
  } catch (err) {
    console.log("Error Occured in getUserAuthCode!");
    console.error(err)
  }
}

module.exports = getUserAuthCode;
