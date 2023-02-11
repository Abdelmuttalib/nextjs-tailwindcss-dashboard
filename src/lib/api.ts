export const baseApiUrl = 'http://161.189.66.94:8090/api';

export const fetchAPI = (apiUrl: string) => {
  return fetch(`${baseApiUrl}${apiUrl}`)
    .then((response) => response.json())
    .catch((error) => new Error(error));
};
