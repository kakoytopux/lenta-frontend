class MainApi {
  constructor({ url, headers }) {
    this._url = url;
    this._headers = headers;
  }
  _getResult(res) {
    if(!res.ok) {
      return Promise.reject(res);
    }

    return res.json();
  }
}

export const mainApi = new MainApi({
  url: '',
  headers: {
    'Content-Type': 'application/json',
  },
});
