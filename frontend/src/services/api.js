import axios from "axios";


const API = axios.create({

baseURL:"https://task-tracker-app-t6fw.onrender.com/api"

});


export default API;