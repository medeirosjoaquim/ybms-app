





import axios from 'axios';
const api_key = 'a28f6036e31e6a2aa5af20c261141381'

export const authenticate = async () => {
  axios.get(`https://jsonplaceholder.typicode.com/users`)
  .then(res => {
    const persons = res.data;
    this.setState({ persons });
  })
}
