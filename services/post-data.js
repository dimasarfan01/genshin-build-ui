import callAPI from '../config/api';

const ROOT_API = process.env.NEXT_PUBLIC_API;
const API_VERSION = 'api/v1';

export const postDataTeamAPI = async (data) => {
  const url = `${ROOT_API}/${API_VERSION}/data-team`;
  return callAPI({
    url,
    method: 'POST',
    data,
    token: true,
  });
};
