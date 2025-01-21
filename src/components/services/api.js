import axios from 'axios';


// const baseURL = "http://localhost:5000/api"; ///
const baseURL = "https://rapidoapi.azurewebsites.net/api";

const instance = axios.create({
  // baseURL: 'http://localhost:5000/api',
  baseURL: 'https://rapidoapi.azurewebsites.net/api',
});


export default instance;


//User API's 

//GET USER
export const getUsers = () => {
  return axios.get(`${baseURL}/user/getall`);
};

//CREATE USER
export const addUser = (userData) => {
  return axios.post(`${baseURL}/user/create`, userData);
};

//DELETE USER
export const deleteUser = (userId) => {
  debugger
  return axios.delete(`${baseURL}/user/${userId}`);
};


