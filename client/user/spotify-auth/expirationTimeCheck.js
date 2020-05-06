const getUserData = require('./../getUserData');
const userRefreshToken = require('./userRefreshToken');
const clearLocalUserData = require('./../clearLocalUserData');

const expirationTimeCheck = async () => {
   // return new Promise((resolve, reject) => {
    await clearLocalUserData('expirationTime');
    const tokenExpirationTime = await getUserData('expirationTime');
    console.log("======Token Expiration Time=========");
    console.log(tokenExpirationTime);

    if (!tokenExpirationTime || new Date().getTime() > tokenExpirationTime) {
      await userRefreshToken();
      // reject();
      // alert('RefreshToken() has been reached and refreshed!');
    } else {
      //this.setState({ accessTokenAvailable: true });
      alert('Access Token is Available!');
      const accessTokenAvailable = true;
      return true;
      // resolve(accessTokenAvailable);
    }
 // });
}

module.exports = expirationTimeCheck;
