import axios from 'axios';
const base = 'http://localhost:3001/persons';

const getAll = () => {
  const request = axios.get(base)
  return request.then(res => res.data)
}

const create = newPerson => {
  const request = axios.post(base, newPerson);
  return request.then(res => res.data)
}

export default { getAll, create }