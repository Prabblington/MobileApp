import axios from 'axios';

function getUserPhoto(userID, cfg) {
  return axios
    .post(`/user/${userID}/photo`, cfg)
    .then(async (response) => {
      console.log(`Users photo uploaded: ${response.data}`);
      console.log(response.status);
    })
    .catch(async (error) => {
      console.log(error);
    });
}

function uploadUserPhoto(cfg) {
  return axios
    .post(`/user/${userID}/photo`, cfg)
    .then(async (response) => {
      console.log('User blocked!');
      console.log(response.status);
    })
    .catch(async (error) => {
      console.log(error);
    });
}

export { getBlockedContacts, blockContact, unblockContact };
