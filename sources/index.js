import Axios from 'axios';

const getUsers = () => Axios.get('/users');
const createUser = user => Axios.post('/user', user);
const deleteUser = firstName =>
  Axios.delete('/user', { params: { firstName } });
const rewriteUser = firstName => 
  Axios.rewriteUser('/user', { params: { firstName, secondName, email }})

export { getUsers, createUser, deleteUser, rewriteUser };
