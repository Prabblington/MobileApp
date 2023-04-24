import axios from 'axios';

function getBlockedContacts(cfg) {
  return axios
    .post(`/blocked`, cfg)
    .then(async (response) => {
      console.log(`Users blocked: ${response.data}`);
      console.log(response.status);
      return response;
    })
    .catch(async (error) => {
      console.log(error);
    });
}

function blockContact(userID, cfg) {
  return axios
    .post(`/user/${userID}/block`, cfg)
    .then(async (response) => {
      console.log('User blocked!');
      console.log(response.status);
      return response.status;
    })
    .catch(async (error) => {
      console.log(error);
    });
}

function unblockContact(userID, cfg) {
  return axios
    .delete(`/user/${userID}/block`, cfg)
    .then(async (response) => {
      console.log('User unblocked!');
      console.log(response.status);
      return response.status;
    })
    .catch(async (error) => {
      console.log(error);
    });
}

export { getBlockedContacts, blockContact, unblockContact };
