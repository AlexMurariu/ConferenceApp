import axios from 'axios'

export default function registerUser(user, pass) {
    return axios
      .post("http://localhost:8080/register", {
          email: user, password: pass 
      })
      .then(response => console.log(response.user))
      .catch(error => alert("Credentials are wrong"));
  }