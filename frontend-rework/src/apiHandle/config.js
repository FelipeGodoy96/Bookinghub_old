import axios from "axios";

axios.defaults.baseURL = 'http://localhost:8080'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

export default axios