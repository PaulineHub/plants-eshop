import axios from 'axios'

export const api = {
  getProducts: () =>
    axios.get('/api/v1/products').then((response) => response.data.products),
}
