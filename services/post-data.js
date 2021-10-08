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
export const updateDataTeamAPI = async (id, data) => {
  const url = `${ROOT_API}/${API_VERSION}/data-team/update/${id}`;
  return callAPI({
    url,
    method: 'PUT',
    data,
    token: true,
  });
};
export const postRatingDataTeamAPI = async (id, data) => {
  const url = `${ROOT_API}/${API_VERSION}/data-team/rating/${id}`;
  return callAPI({
    url,
    method: 'PATCH',
    data,
    token: true,
  });
};

export const updateMyUserDataAPI = async (id, data) => {
  const url = `${ROOT_API}/${API_VERSION}/data-users/profile/${id}`;
  return callAPI({
    url,
    method: 'PUT',
    data,
    token: true,
  });
};
