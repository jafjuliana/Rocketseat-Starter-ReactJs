import axios from 'axios';

const api = axios.create({base_url: 'http://rocketseat-node.herokuapp.com/api'});

export default api