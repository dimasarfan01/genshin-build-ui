import callAPI from '../config/api';

const ROOT_API = process.env.NEXT_PUBLIC_API;
const API_VERSION = 'api/v1';

export const getDataCharactersAPI = async () => {
  const url = `${ROOT_API}/${API_VERSION}/data-characters`;
  return callAPI({
    url,
    method: 'GET',
  });
};
export const getDataTeamCompAPI = async (page) => {
  const url = `${ROOT_API}/${API_VERSION}/data-team?page=${page}`;
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