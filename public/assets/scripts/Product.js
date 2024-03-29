import Router from './Router.js';
import CloneItem from './CloneItem.js';
import LocalStorage from './LocalStorage.js';

export default class Product extends Router {

    constructor() {
        super();

        this._elImagesContainer = document.querySelector('[data-js-description-images-wrapper]');
        this._elTemplateImages = document.querySelector('[data-js-description-images-template]');
        this._elProductDescriptionContainer = document.querySelector('[data-js-product-description-wrapper]');
        this._elTemplateProductDescription = document.querySelector('[data-js-description-product-template]');
        this._elLightIndicators = document.querySelectorAll('[data-js-light]');
        this._elTemperatureIndicators = document.querySelectorAll('[data-js-temperature]');
        this._elQuantityUpButton = document.querySelector('[data-js-quantity-increment]');
        this._elQuantityDownButton = document.querySelector('[data-js-quantity-decrement]');
        this._elQuantityValue = document.querySelector('[data-js-quantity-value]');
        this._elBtnAddToBasket = document.querySelector('[data-js-btn-add-basket]');
        this._elCircle = document.querySelector('.circle');
        this._elDevelopSectionBtns = document.querySelectorAll('[data-js-develop-section]');

        this.init();
    }

    /**
     * Set the initial behaviors.
     */
   init() {
       let productId = this.getSearchParamsFromUrl();
       this.displayProductContent(productId);

       this._elQuantityUpButton.addEventListener('click', this.updateQuantity.bind(this));
       this._elQuantityDownButton.addEventListener('click', this.updateQuantity.bind(this));

       this._elBtnAddToBasket.addEventListener('click', this.addProductToBasket.bind(this));

       this._elDevelopSectionBtns.forEach(elDevelopSectionBtn => {
            elDevelopSectionBtn.addEventListener('click', this.developSection.bind(this));
       })
   }

   /**
     * Display the content of the product (images and description) and add class on the right temperature and light indicators.
     * @param {object} idObject - The id of the product.
     */
   displayProductContent(idObject) {
       this.getProductDescription(idObject)
       .then(infosObject => {
           const {category, image, temperature, light} = infosObject;
           this.addClassSelected(temperature, this._elTemperatureIndicators);
           this.addClassSelected(light, this._elLightIndicators);
           this.getProductDetailImages({category})
           .then(detailImages => {
               let infos = {
                   image1: image,
                   image2: detailImages.src[0],
                   image3: detailImages.src[1],
               }
                new CloneItem(infos, this._elTemplateImages, this._elImagesContainer);
           })
           
       });
   }

   /**
     * Get the product description and insert it into the DOM.
     * @param {object} params - The id of the product.
     * @return {object} - The infos about the product.
     */
   async getProductDescription(params) {
        try {
            const {data} = await axios.get(`/api/v1/products/${params.id}`, { params });
            const {product} = data;
            let infos = {
                id: product._id,
                name: product.name,
                category: product.category,
                price: product.price,
                description: product.description
            }
            new CloneItem(infos, this._elTemplateProductDescription, this._elProductDescriptionContainer);
            const {category, image, temperature, light} = product;
            return {category, image, temperature, light};
        } catch (error) {
            console.log(error);
        }
    }

    /**
     * Get the product's secondary images infos.
     * @param {object} params - The category of the product.
     * @return {object} - The infos about the images.
     */
    async getProductDetailImages(params) {
        try {
            const {data} = await axios.get(`/api/v1/images`, {params});
            const {imagesPack} = data;
            return imagesPack;
            
        } catch (error) {
            console.log(error);
        }
    }
 
    /**
     * Add class on the right temperature and light indicators.
     * @param {string} option - The value of the option to select.
     * @param {string} elOptions - The option element to add the class to.
     */
    addClassSelected(option, elOptions) {
        elOptions.forEach(elOption => {
            let elOptionValue = elOption.dataset.jsOption;
            if (option == elOptionValue) elOption.classList.add('option-selected')
        })
    }

    /**
     * Update the quantity value of products to order accordingly to the button clicked.
     * @param {string} e - Event.
     */
    updateQuantity(e) {
        let action = e.target.innerText;
        let value = parseInt(this._elQuantityValue.value);
        if (action == '-' && value > 1) value--;
        else if (action == '+') value++;
        this._elQuantityValue.value = value.toString();
    }

    /**
     * Add an item in the shopping basket.
     */
    addProductToBasket() {
        let productQuant = this._elQuantityValue.value;
        let productId = document.querySelector('[data-js-product-id]').dataset.jsProductId;
        const localStorage = new LocalStorage();
        localStorage.addToLocalStorage({id: productId, quant: productQuant});
        this.displayShopBasketNotif();
    }

    /**
     * Display a circle element to notify that there is items in the shopping basket.
     */
    displayShopBasketNotif() {
        let itemsStored = this.getContentShoppingBasket();
        if (itemsStored.length === 0 ) {
            this._elCircle.classList.remove('show-circle');
        } else {
            this._elCircle.classList.add('show-circle');
        }
    }

    /**
     * Get the content of the array shopping list in the local storage.
     * @return array - Returns the items stored.
     */
    getContentShoppingBasket() {
        let localStorage = new LocalStorage();
        let itemsStored = localStorage.getLocalStorage();
        return itemsStored;
    }

    /**
     * Show a section of text.
     */
    developSection(e) {
        e.target.classList.remove('show-content');
        const elContentCtn = e.target.parentElement.parentElement.nextElementSibling;
        elContentCtn.classList.add('show-content');
        const elBtnMinus = e.target.nextElementSibling;
        elBtnMinus.classList.add('show-content');
        elBtnMinus.addEventListener('click', this.hideSection.bind(this));
    }

    /**
     * Hide a section of text.
     */
    hideSection(e) {
        e.target.classList.remove('show-content');
        const elContentCtn = e.target.parentElement.parentElement.nextElementSibling;
        elContentCtn.classList.remove('show-content');
        const elBtnPlus = e.target.previousElementSibling;
        elBtnPlus.classList.add('show-content');
    }

}