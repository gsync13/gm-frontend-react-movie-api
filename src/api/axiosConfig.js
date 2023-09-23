import axios from 'axios';

export default axios.create({
    baseURL: 'http://localhost:8080', // Use 'http' como o protocolo
    //baseURL:'https://9c96-103-106-239-104.ap.ngrok.io', não funciona, tive de usar o localhost
    headers: {"ngrok-skip-browser-warning": "true"}
});