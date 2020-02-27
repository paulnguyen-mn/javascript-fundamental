
const request = async (url, requestOptions) => {
  try {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      ...requestOptions,
    };

    const response = await fetch(url, options);
    if (response.ok) {
      return response.json();
    }

    // TODO: Handle error
  } catch (error) {
    throw error;
  }
};

const get = (url, queryParams) => {
  // TODO: Handle query params
  return request(url);
};
const post = (url, payload) => request(url, { method: 'POST', body: JSON.stringify(payload) });
const patch = (url, payload) => request(url, { method: 'PATCH', body: JSON.stringify(payload) });
const remove = (url) => request(url, { method: 'DELETE' });

export default {
  get,
  post,
  patch,
  remove,
};
