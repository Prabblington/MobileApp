import axios from 'axios';

import { returnCurrentUserID } from '../User/getUser';

function addContact(userID, cfg) {
  const currentUserID = returnCurrentUserID();

  if (userID === currentUserID) {
    console.log('You cannot add yourself as a contact');
    return null;
  }
  return axios.post(`/user/${userID}/contact`, cfg).then(async (response) => {
    console.log('User added!');
    console.log(response.status);
    return response.status;
  });
}

function removeContact(userID, cfg) {
  console.log('User removed!');
  return axios
    .delete(`/user/${userID}/contact`, cfg)
    .then(async (response) => {
      console.log('User deleted!');
      console.log(response.status);
    })
    .catch(async (error) => {
      console.log(error);
    });
}

export { addContact, removeContact };
