import callAPI from '../config/api';

const ROOT_API = process.env.NEXT_PUBLIC_API;
const API_VERSION = 'api/v1';

export const deleteDataTeamCompAPI = async (id) => {
  const url = `${ROOT_API}/${API_VERSION}/data-team/delete/${id}`;
  return callAPI({
    url,
    method: 'DELETE',
    token: true,
  });
};
