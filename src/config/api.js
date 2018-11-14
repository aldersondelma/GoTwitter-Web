import Axios from 'axios';

const data = Axios.create({
  baseURL: "http://localhost:4005"
});

export default data;