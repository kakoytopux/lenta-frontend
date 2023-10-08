class MainApi {
  constructor({ url, headers }) {
    this._url = url;
    this._headers = headers;
  }
  _getResult(res) {
    if(!res.ok) {
      return Promise.reject('Ошибка: ' + res.statusText + ' ' + res.status);
    }

    return res.json();
  }
  authUser(email, password) {
    return fetch(`${this._url}/api/v1/auth/token/login`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
    .then(res => this._getResult(res))
  }
  userMeData(token) {
    return fetch(`${this._url}/api/v1/users/me/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${token}`,
      },
    })
    .then(res => this._getResult(res))
  }
  productsData(token) {
    return fetch(`${this._url}/api/v1/products/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${token}`,
      },
    })
    .then(res => this._getResult(res))
  }
}

export const mainApi = new MainApi({
  url: 'http://127.0.0.1:8000',
  headers: {
    'Content-Type': 'application/json',
  },
});
