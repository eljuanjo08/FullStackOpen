import axios from "axios";
const baseUrl = 'https://studies.cs.helsinki.fi/restcountries';

const getAll = () => {
  const request = axios.get(`${baseUrl}/api/all`);
  return request.then(res => res.data)
}

export default { getAll }