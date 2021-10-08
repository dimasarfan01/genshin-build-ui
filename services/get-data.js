import callAPI from '../config/api';

const ROOT_API = process.env.NEXT_PUBLIC_API;
const API_VERSION = 'api/v1';

export const getDataCharactersAPI = async (serverToken) => {
  const url = `${ROOT_API}/${API_VERSION}/data-characters`;
  return callAPI({
    url,
    method: 'GET',
    serverToken: serverToken,
  });
};
export const getDataArtifactsAPI = async (serverToken) => {
  const url = `${ROOT_API}/${API_VERSION}/data-artifacts`;
  return callAPI({
    url,
    method: 'GET',
    serverToken: serverToken,
  });
};
export const getDataWeaponAPI = async (serverToken) => {
  const url = `${ROOT_API}/${API_VERSION}/data-weapon`;
  return callAPI({
    url,
    method: 'GET',
    serverToken: serverToken,
  });
};
export const getDataTeamCompAPI = async (page) => {
  const url = `${ROOT_API}/${API_VERSION}/data-team?page=${page}`;
  return callAPI({
    url,
    method: 'GET',
  });
};
export const getDataTeamCompTopRatedAPI = async (page) => {
  const url = `${ROOT_API}/${API_VERSION}/data-team/toprated?page=${page}`;
  return callAPI({
    url,
    method: 'GET',
  });
};
export const getDataTeamCompOnlyIdAPI = async () => {
  const url = `${ROOT_API}/${API_VERSION}/data-team/onlyid`;
  return callAPI({
    url,
    method: 'GET',
  });
};
export const getDataTeamCompByIdAPI = async (id) => {
  const url = `${ROOT_API}/${API_VERSION}/data-team/details/${id}`;
  return callAPI({
    url,
    method: 'GET',
  });
};
export const getDataTeamCompByQueryAPI = async (page, query) => {
  const url = `${ROOT_API}/${API_VERSION}/data-team/query?findCharacter=${query}&page=${page}`;
  return callAPI({
    url,
    method: 'GET',
  });
};
export const getDataUsersAPI = async (id) => {
  const url = `${ROOT_API}/${API_VERSION}/data-users/profile/${id}`;
  return callAPI({
    url,
    method: 'GET',
  });
};
export const getMyUserDataAPI = async (id, serverToken) => {
  const url = `${ROOT_API}/${API_VERSION}/data-users/myprofile/${id}`;
  return callAPI({
    url,
    method: 'GET',
    serverToken: serverToken,
  });
};
