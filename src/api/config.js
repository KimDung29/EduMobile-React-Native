/* eslint-disable prettier/prettier */
import {create} from 'apisauce';
import {SITE_URL} from '../config';

const api = create({
  baseURL: SITE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

api.addRequestTransform(request => {
  request.headers['X-Request-Transform'] = 'Changing Stuff!';

  // console.log('request apisauce: ', request);
});

const config = {
  get: async (endpoint, params = {}, randomVersion = true) => {
    const queryParam = {...params};

    if (randomVersion) {
      queryParam.v = Math.floor(Math.random() * 999999999);
    }

    let url = `${endpoint}`;
    if (Object.keys(queryParam).length > 0) {
      url += `?${Object.keys(queryParam)
        .map(key => `${key}=${queryParam[key]}`)
        .join('&')}`;
    }

    console.debug(url);

    return await api.get(url);
  },

  post: async (endpoint, params = {}) => {
    const url = endpoint;

    console.debug(url);

    return await api.post(url, params);
  },

  put: async (endpoint, params = {}) => {
    const url = endpoint;
    console.debug(url);

    return await api.put(url, params);
  },

  delete: async (endpoint, params = {}) => {
    const url = endpoint;
    console.debug(url);

    return await api.delete(url, params);
  },
};

export {api, config};
