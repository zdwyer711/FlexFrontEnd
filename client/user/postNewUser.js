import axios from 'axios';
const getUserData = require('./getUserData');

const postNewUser = async () => {

  // const userId = await getUserData('userId');
  // const lastName = await getUserData('LastName');
  // const firstName = await getUserData('FirstName');
  const refreshToken = await getUserData('refreshToken');
  const accessToken = await getUserData('accessToken');
  // const expirationTime = await getUserData('expirationTime');

  //let createUserEndpoint = 'http://192.168.1.65:3000/addNewUser/add/' + userId + '/' + lastName + '/' + firstName + '/' + refreshToken + '/' + accessToken + '/' + expirationTime;
  let createUserEndpoint = 'http://192.168.1.65:3000/addNewUser/add/420/Secord/Anthony/' + refreshToken + '/' + accessToken + '/45645';
  const res = await axios.post(createUserEndpoint)
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
}

module.exports = postNewUser;
