import axios from "axios";

axios.defaults.baseURL = 'https://bookinghub.onrender.com'
axios.defaults.headers.post['Content-Type'] = 'application/json'

export default axios
