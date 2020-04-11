import axios from 'axios';

const userCookies = async (userId) => {
  console.log("Getting User Cookies...")
  console.log(userId);
  const res = await axios.get('http://localhost:3000/getUser/get/1');
  //const res = await fetch('http://192.168.1.65:3000/getSpotifyCreds/api/spotify-credentials')
  console.log(res);
  //const userCookiesResponse = res.data;
  const userCookiesResponse = "douchebag"
  console.log(userCookiesResponse);
  return userCookiesResponse;
}

// export the spotify credentials
module.exports = userCookies;
