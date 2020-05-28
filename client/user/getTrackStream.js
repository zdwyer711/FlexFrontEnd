import axios from 'axios';

const getTrackStream = async () => {
  console.log("getSpotifyCredentials()")
  //const res = await axios.get('http://192.168.1.65:3000/getSpotifyCreds/api/spotify-credentials');

  // const res = await fetch('http://192.168.1.65:3000/getSpotifyCreds/api/spotify-credentials').then((response) => {
  //   console.log(response);
  // });

  //may need to use fetch here for ReadableStream
  const flexTrackStream = fetch('http://192.168.1.65:3000/getFlexTracks/api/flex-tracks/5dff97bec4d4ab1318e3d94d')
      .then(function (response) {
        if(response.status == '200'){
          console.log("200 response!")
          console.log(response);
          return response.data;
        } 
      })
      .catch(function (error) {
        console.log(error);
      });
      console.log("<---After flexTrackStream--->");
      console.log(flexTrackStream);
  //const res = await getSpotifyCredsFromApiAsync();
  // console.log("After Fetch");
  // console.log(res.data);
  //console.log(res);
  //const spotifyCredentials = res.data;

  return flexTrackStream;
}

// export the spotify credentials
module.exports = getTrackStream;
