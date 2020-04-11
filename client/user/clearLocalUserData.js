import * as SecureStore from 'expo-secure-store';

const clearLocalUserData = async (userKey) => {
  // console.log("Secure Store");
  // console.log(SecureStore.setItemAsync);
  //SecureStore.setItemAsync('userId','test');
  console.log("clearLocalUserData() script!");
  console.log(userKey);
  try{
    const localStoragePromise = SecureStore.deleteItemAsync(userKey).then(data => {
      return data;
    }).catch(error => {
      console.log("Secure Storage Error!");
      console.log(error);
    });

    return localStoragePromise;
  } catch(err) {
    console.log("setUserData ERROR!");
    console.log(err);
    return error;
  }

}

// export the spotify credentials
module.exports = clearLocalUserData;
