const axios = require("axios");

exports.request = function (url, method, data, token) {
  const objectrequest = token
    ? {
        headers: {
          authorization: `Bearer ${token}`,
        },
        method,
        url,
        data,
      }
    : { method, url, data };
  return axios(objectrequest);
};
