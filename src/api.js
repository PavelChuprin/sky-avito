import axios from "axios";

const PATH = "http://localhost:8090";

export async function registerUser(email, password, firstname, surname, city) {
  try {
    const response = await axios.get(`${PATH}/auth/register`);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
