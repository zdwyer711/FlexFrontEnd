import * as SecureStore from 'expo-secure-store';

const getUserData = async (userKey) => {
  // console.log("Secure Store");
  // console.log(SecureStore.setItemAsync);
  //SecureStore.setItemAsync('userId','test');
  console.log("getUserData() script!");
  console.log(userKey);
  try{
    const userData = SecureStore.getItemAsync(userKey).then(data => {
      console.log(data);
      return data;
    }).catch(error => {
      console.log("Secure Storage Error!");
      console.log(error);
    });

    // console.log("<----get user data script---->");
    // console.log(userData);
    return userData;
  } catch(err) {
    console.log("getUserData ERROR!");
    console.log(err);
    return error;
  }

}

module.exports = getUserData;
