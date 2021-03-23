const axios = require("axios");

exports.request =  function (url, method, data) {
  return axios({
    method,
    url,
    data,
  });
};
