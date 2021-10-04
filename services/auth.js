import callAPI from '../config/api';

const ROOT_API = process.env.NEXT_PUBLIC_API;
const API_VERSION = 'api/v1';

export const setSignUp = async (data) => {
  const url = `${ROOT_API}/${API_VERSION}/auth/signup`;
  return callAPI({
    url,
    method: 'POST',
    data,
  });
};
export const setLogin = async (data) => {
  const url = `${ROOT_API}/${API_VERSION}/auth/signin`;

  return callAPI({
    url,
    method: 'POST',
    data,
  });
};
