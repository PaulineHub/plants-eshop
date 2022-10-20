import CloneItem from "./CloneItem.js";
import Carousel from "./Carousel.js";

export default class Products {

    constructor(params) {
        this.params = params;
        this._elProductsContainer = document.querySelector('[data-js-products-wrapper]');
        this._elItemTemplate = document.querySelector('[data-js-item-template]');

        this.init();
    }

    async init() {

        await this.requestGetApi(this.params)
        let pathname = window.location.pathname;
        if (pathname == "/index.html" || pathname == "/" ) new Carousel();
    }

    /**
     * Get the infos of a product and insert the product into the DOM.
     * @param {object} params - The params for the request.
     */
    async requestGetApi(params) {
        try {
            const {data} = await axios.get(`/api/v1/products`, { params });
            // display products
            this._elProductsContainer.innerHTML = '';
            data.products.forEach(product => {
                let infos = {
                    id: product._id,
                    title: product.name,
                    image: product.image,
                    category: product.category,
                    price: product.price
                    }
                new CloneItem(infos, this._elItemTemplate, this._elProductsContainer);
            })
        } catch (error) {
            console.log(error);
        }
    }


}