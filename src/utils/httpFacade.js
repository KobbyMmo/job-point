import { API_BASE_URL } from "./constant";
import axios from "axios";

const http = axios.create({
  baseURL: API_BASE_URL,
  headers: { "Content-Type": "application/json",  'Access-Control-Allow-Origin': '*', }
});


const HttpFacade = function httpFacade() {
  function buildQeryString(query = {}) {
    const queryString = Object.keys(query)
      .map(key => key + "=" + query[key])
      .join("&");
    return queryString;
  }

  return {
    post: function post(options) {
      const { url, body, query } = options;
      const queryString = buildQeryString(query);
      const _url = `${API_BASE_URL}/${url}?${queryString}`;
      return http.post(_url, body).then(response => {
        console.log(response);
        return response.data;
      });
    },
    patch: function patch(options) {
      const { url, body, query } = options;
      const queryString = buildQeryString(query);
      const _url = `${API_BASE_URL}/${url}?${queryString}`;
      return http.patch(_url, body).then(response => {
        console.log(response);
        return response.data;
      });
    },

    get: function get(options) {
      const { url, query } = options;
      const queryString = buildQeryString(query);
      const _url = `${API_BASE_URL}/${url}?${queryString}`;
      return http.get(_url).then(response => response.data);
    },

    deleteData: function deleteData(options) {
      const { url, query } = options;
      const queryString = buildQeryString(query);
      const _url = `${API_BASE_URL}/${url}?${queryString}`;
      return http.delete(_url).then(response => response.data);
    },

    put: function put(options) {
      const { url, body, query } = options;
      const queryString = buildQeryString(query);
      const _url = `${API_BASE_URL}/${url}?${queryString}`;
      return http.put(_url, body).then(response => response.data);
    }
  };
};

export default HttpFacade();
