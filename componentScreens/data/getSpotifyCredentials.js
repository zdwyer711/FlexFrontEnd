import axios from 'axios';

const getSpotifyCredentials = async () => {
  console.log("getSpotifyCredentials()")
  //const res = await axios.get('http://192.168.1.65:3000/getSpotifyCreds/api/spotify-credentials');

  // const res = await fetch('http://192.168.1.65:3000/getSpotifyCreds/api/spotify-credentials').then((response) => {
  //   console.log(response);
  // });
  const spotifyCredentials = axios.get('http://192.168.1.65:3000/getSpotifyCreds/api/spotify-credentials')
      .then(function (response) {
        if(response.status == '200'){
          console.log(response);
          return response.data;
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  //const res = await getSpotifyCredsFromApiAsync();
  // console.log("After Fetch");
  // console.log(res.data);
  //console.log(res);
  //const spotifyCredentials = res.data;

  return spotifyCredentials;
}

// export the spotify credentials
module.exports = getSpotifyCredentials;


// async function getSpotifyCredsFromApiAsync() {
//   try {
//     console.log("getSpotifyCredsFromApiAsync()");
//     const response = await fetch('http://192.168.1.65:3000/getSpotifyCreds/api/spotify-credentials');
//     console.log("after fetch");
//     console.log(response);
//     return response;
//     // let json = await response.json();
//   //  return json.data;
//   } catch (error) {
//     console.error(error);
//   }
// }
