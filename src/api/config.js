import axios from 'axios';
export default axios.create({
    // baseURL: `http://localhost:3000`// development environtment
    baseURL: `https://novizh-kanban-app-server.herokuapp.com/` // production environtment
})