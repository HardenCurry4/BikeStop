import axios from "axios";
import { getEnvVariables } from "../helpers/getEnvVariables";


const Bikeapi=axios.create({
    baseURL:getEnvVariables().VITE_API_URL
});

Bikeapi.interceptors.request.use((configure)=>{

    configure.headers={
        ...configure.headers,
        "x-token":localStorage.getItem("token")
    }

    return configure;
})

export default Bikeapi;