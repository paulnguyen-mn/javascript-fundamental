import fetchClient from "./fetchClient.js";
import BaseApi from "./baseApi.js";

const API_URL = 'https://js-post-api.herokuapp.com/api';

class ProductApi extends BaseApi {
  getResourceName() {
    return 'products';
  }

  // getAll() {
  //   const url = `${API_URL}/${this.getResourceName()}`;
  //   return fetchClient.get(url);
  // }

  // get(id) {
  //   const url = `${API_URL}/${this.getResourceName()}/${id}`;
  //   return fetchClient.get(url);
  // }

  // add(payload) {
  //   const url = `${API_URL}/${this.getResourceName()}/${payload.id}`;
  //   return fetchClient.post(url, payload);
  // }

  // update(payload) {
  //   const url = `${API_URL}/${this.getResourceName()}/${payload.id}`;
  //   return fetchClient.patch(url, payload);
  // }

  // remove(id) {
  //   const url = `${API_URL}/${this.getResourceName()}/${id}`;
  //   return fetchClient.remove(url);
  // }
}

const productApi = new ProductApi();
export default productApi;
