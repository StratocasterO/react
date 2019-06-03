const API_URL = 'https://pokeapi.co/api/v2';

const fetchData = (url, options = {}) => {
  const { headers = {}, ...reqOptions } = options;
  console.log(headers)
  return fetch(API_URL + url, {
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    ...reqOptions,
  }).then(res => res.json())
};

export const getJson = (url, params, options) => {
  const urlParams = params && Object.entries(params)
    .reduce((acc, [name, value]) => `${acc}${name}=${value}&` , '?')
    .slice(0, -1);
  return fetchData(url + urlParams, options);
};

export const postJson = (url, params, options = {}) => {
  return fetchData(url, {
    method: 'POST',
    body:JSON.stringify(params),
    ...options,
  });
};