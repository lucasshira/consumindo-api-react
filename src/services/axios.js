import axios from 'axios'; // axios retorna uma Promise

// usando uma API local
export default axios.create({
  baseURL: 'http://localhost:3001',
});
