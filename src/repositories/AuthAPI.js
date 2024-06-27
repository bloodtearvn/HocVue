import axios from 'axios';

const API_URL = 'http://localhost:88/api/auth';
const _loginEndPoint="/login"

class AuthService {
  login(user) {
    return axios
      .post(API_URL + _loginEndPoint, {
        email: user.email,
        password: user.password
      })
      .then(response => {        
        console.log(response.data.data.access_token)
        if (response.data.data) {
          localStorage.setItem('user', JSON.stringify(response.data.data.access_token));
        }
        return response.data;
      });
  }

  logout() {
    localStorage.removeItem('user');
  }

//   register(user) {
//     return axios.post(API_URL + 'signup', {
//       username: user.username,
//       email: user.email,
//       password: user.password
//     });
//   }
}

export default new AuthService();