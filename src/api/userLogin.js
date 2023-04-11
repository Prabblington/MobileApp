import ApiConfig from './apiConfig';

const userLogin = async (data) => {
  try {
    const result = await ApiConfig('/user/login', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      data: { data },
    });
    return result;
  } catch (err) {
    return err.response.data;
  }
};
