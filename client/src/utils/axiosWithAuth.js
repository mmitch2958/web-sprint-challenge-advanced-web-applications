import axios from 'axios';

//Axios WithAuth File 

 export const axiosWithAuth = () => {
    const token = localStorage.getItem("token");
    return axios.create({
        baseURL:"http://localhost:5000/api",
        headers: {
            Authorization: token
        }
    });
 };