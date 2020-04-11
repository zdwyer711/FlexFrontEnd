import * as SecureStore from 'expo-secure-store';

const setUserData = async (userKey, value) => {
  // console.log("Secure Store");
  // console.log(SecureStore.setItemAsync);
  //SecureStore.setItemAsync('userId','test');
  console.log("getUserData() script!");
  console.log(userKey);
  const strVal = value.toString();
  try{
    const localStoragePromise = SecureStore.setItemAsync(userKey,strVal).then(data => {
      console.log(data);
      return data;
    }).catch(error => {
      console.log("Secure Storage Error!");
      console.log(error);
    });

    console.log(localStoragePromise);
    return localStoragePromise;
  } catch(err) {
    console.log("setUserData ERROR!");
    console.log(err);
    return error;
  }

}

// export the spotify credentials
module.exports = setUserData;
