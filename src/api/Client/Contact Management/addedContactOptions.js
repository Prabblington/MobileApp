import axios from 'axios';

function addContact(userID, cfg) {
  return axios
    .post(`/user/${userID}/contact`, cfg)
    .then(async (response) => {
      console.log('User added!');
      console.log(response.status);
    })
    .catch(async (error) => {
      console.log(error);
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
