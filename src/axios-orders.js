import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-sandbox-5fe85.firebaseio.com/'
});

export default instance;