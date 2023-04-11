import OpenAPIClientAxios from 'openapi-client-axios';
import axios from 'axios';

const api = new OpenAPIClientAxios({
  definition: 'http://localhost:3333/api/1.0.0',
  axiosConfigDefaults: {
    headers: {
      'Content-Type': 'json',
      'X-Authorization': 'access',
    },
  },
  axios,
});

const client = await api.init();
// const res = await client.getUser(2);

client.paths['/user/{user_id}'].get({ user_id: 2 }); // GET /pets, same as calling client.getPets()
// client.paths['/pets'].post(); // POST /pets
// client.paths['/pets/{petId}'].put(1); // PUT /pets/1
// client.paths['/pets/{petId}/owner/{ownerId}'].get({ petId: 1, ownerId: 2 }) ; // GET /pets/1/owner/2

// const getUser = (userID) =>
//   client
//     .getUser({ userId: userID })
//     .then((response) => {
//       console.log(response.data);
//       return response.data;
//     })
//     .catch((error) => {
//       console.error(error);
//       throw new Error('Failed to get user');
//     });

// export default getUser;
