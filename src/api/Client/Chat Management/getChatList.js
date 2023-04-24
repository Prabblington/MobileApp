import axios from 'axios';

export default async function getChatList(cfg) {
  try {
    return axios.get('./chat', cfg).then((response) => {
      console.log(`response.data: ${response.data}`);
      console.log(response.status);
      return response.data;
    });
  } catch (e) {
    console.log(e);
    return null;
  }
}
