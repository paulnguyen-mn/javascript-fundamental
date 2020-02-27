import fetchClient from "./fetchClient.js";

const API_URL = 'https://js-post-api.herokuapp.com/api';

export default class BaseApi {
  getResourceName() {
    throw new Error('Must implement this function');
  }

  getAll() {
    const url = `${API_URL}/${this.getResourceName()}`;
    return fetchClient.get(url);
  }

  get(id) {
    const url = `${API_URL}/${this.getResourceName()}/${id}`;
    return fetchClient.get(url);
  }

  add(payload) {
    const url = `${API_URL}/${this.getResourceName()}/${payload.id}`;
    return fetchClient.post(url, payload);
  }

  update(payload) {
    const url = `${API_URL}/${this.getResourceName()}/${payload.id}`;
    return fetchClient.patch(url, payload);
  }

  remove(id) {
    const url = `${API_URL}/${this.getResourceName()}/${id}`;
    return fetchClient.remove(url);
  }
}
