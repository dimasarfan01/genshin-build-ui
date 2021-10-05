import axios from 'axios';
import Cookies from 'js-cookie';

export default async function callAPI({
  url,
  method,
  data,
  token,
  serverToken,
}) {
  let headers = {};
  if (serverToken) {
    headers = {
      Authorization: `Bearer ${serverToken}`,
    };
  } else if (token) {
    const tokenCookeis = Cookies.get('token');
    if (tokenCookeis) {
      const jwtToken = window.atob(`${tokenCookeis}`);
      headers = {
        Authorization: `Bearer ${jwtToken}`,
      };
    }
  }
  const response = await axios({
    url,
    method,
    data,
    headers,
  }).catch((error) => error.response);

  if (response.status > 300) {
    const res = {
      error: true,
      message: response.data.message,
      data: null,
    };
    return res;
  }

  const length = Object.keys(response.data).length;

  const res = {
    error: false,
    message: 'Success',
    data: length > 1 ? response.data : response.data.data,
  };
  return res;
}
