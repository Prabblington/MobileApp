import axios from 'axios';

export default async function startNewChat(name, cfg) {
  try {
    return await axios
      .post('/chat', name, cfg)
      .then((response) => response.data);
  } catch (e) {
    console.log(e);
    return null;
  }
}
