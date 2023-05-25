import axios from 'axios';


const clienteAxios = axios.create({
    baseURL: "http://54.94.136.133:8080/"

});

export default clienteAxios;