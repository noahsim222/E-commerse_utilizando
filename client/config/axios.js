import axios from 'axios';


const clienteAxios = axios.create({
    baseURL: "https://server-omega-azure.vercel.app/"

});

export default clienteAxios;