import axios from "axios";
 
export default function getLoggedInUser() {
  return axios
    .get("http://localhost:8080/users")
    .then(response => response.data)
    .catch(error => console.log(error));
}
