import axios from 'axios'

export const api = {
  getProducts: () =>
    axios
    .get('/api/v1/products')
    .then((response) => response.data.products),
  getSingleProduct: (id) =>
    axios
      .get(`/api/v1/products/${id}`)
      .then((response) => response.data.product),
  getProductDetailImages: (params) =>
    axios
      .get(`/api/v1/images`, { params })
      .then((response) => response.data.imagesPack),
}
