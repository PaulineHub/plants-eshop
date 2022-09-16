import Router from './Router.js';

export default class Product extends Router {

    constructor() {
        super();
        this._elImagesContainer = document.querySelector('[data-js-description-images-wrapper]');
        this._elTemplateImages = document.querySelector('[data-js-description-images-template]');
        this._elProductDescriptionContainer = document.querySelector('[data-js-product-description-wrapper]');
        this._elTemplateProductDescription = document.querySelector('[data-js-description-product-template]');
        this._elLightIndicators = document.querySelectorAll('[data-js-light]');
        this._elTemperatureIndicators = document.querySelectorAll('[data-js-temperature]');

        this.init();
    }

   init() {
       let productId = this.getSearchParamsFromUrl();
       this.displayProductContent(productId);

       //add listen event on quantity buttons
   }

   displayProductContent(idObject) {
       this.getProductDescription(idObject)
       .then(category => {
           this.getProductDetailImages({category});
       });
 
       //
   }

   async getProductDescription(params) {
        try {
            const {data} = await axios.get(`/api/v1/products/${params.id}`, { params });
            this.createProductDescription(data.product);
            return data.product.category;
        } catch (error) {
            console.log(error);
        }
    }

    async getProductDetailImages(params) {
        try {
            // const { headers, data } = await axios.get(`/api/v1/images`, {params});
            const response = await axios.get(`/api/v1/images`, {params});
            const data = response.data;
            console.log('detailImages', detailImages);
            //this.createImagesDetail(data.product.image, detailImages);
        } catch (error) {
            console.log(error);
        }
    }

    createProductDescription(item) {
        let infos = {
                name: item.name,
                category: item.category,
                price: item.price,
                description: item.description
            }
            let elItemTemplateClone = this._elTemplateProductDescription.cloneNode(true);

            for (const cle in infos) {
                let regExp = new RegExp(`{{${cle}}}`, 'g');
                elItemTemplateClone.innerHTML = elItemTemplateClone.innerHTML.replace(regExp, infos[cle])
            }

            let newElItem = document.importNode(elItemTemplateClone.content, true);
            this._elProductDescriptionContainer.prepend(newElItem);
    }
}