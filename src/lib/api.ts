export const baseApiUrl = 'http://161.189.66.94:8090/api';

// export const fetchAPI = (apiUrl: string, options: object) => {
//   return fetch(`${baseApiUrl}${apiUrl}`, options).then((response) =>
//     response.json()
//   );
// };

const get = (apiUrl: string) => {
  return fetch(`${baseApiUrl}${apiUrl}`).then((response) => response.json());
};

const post = (apiUrl: string, options: object) => {
  return fetch(`${baseApiUrl}${apiUrl}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
  }).then((response) => response.json());
};

export const fetchAPI = {
  get,
  post,
};
