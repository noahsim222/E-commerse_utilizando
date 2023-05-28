import axios from 'axios';


const clienteAxios = axios.create({
    baseURL: "https://server-beta-mauve.vercel.app/"

});

export default clienteAxios;