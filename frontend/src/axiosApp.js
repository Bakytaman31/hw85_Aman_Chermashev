import axios from 'axios';
import {api} from "./constants";

const axiosApp = axios.create({
    baseURL: api
});

export default axiosApp;