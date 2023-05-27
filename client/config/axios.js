import axios from 'axios';


const clienteAxios = axios.create({
    baseURL: "https://jordansb.fly.dev/"

});

export default clienteAxios;