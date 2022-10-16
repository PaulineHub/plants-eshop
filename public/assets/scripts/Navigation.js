import CloneItem from './CloneItem.js';
import LocalStorage from './LocalStorage.js';

export default class Navigation {

    constructor() {
        this._elNav = document.querySelector('nav');
        this._elNavBtn = this._elNav.children[2].children[0];
        this._elMenu = this._elNav.querySelector('.menu');
        this._elShopBtn = this._elNav.querySelector('.fa-shopping-bag');
        this._elShopBigCtn = this._elNav.querySelector('[data-js-shop-list-big-ctn]');
        this._elShopCtn = this._elNav.querySelector('[data-js-shop-list-ctn]');
        this._elItemShopListTemplate = document.querySelector('[data-js-shop-list-item-template]');

        this.prevScrollPos = window.pageYOffset;
        
        this.init();
    }

    init() {

        this._elNavBtn.addEventListener('click', this.displayMobileNav.bind(this));
        this._elShopBtn.addEventListener('click', this.displayShoppingList.bind(this));

        window.onscroll = () => {
            this.hideNavBar();
        }
    }

    /**
     * Display the mobile navigation.
     */
    displayMobileNav() {
        this._elMenu.classList.toggle('show-nav');
    }

    /**
     * Hide nav bar when the user scroll down.
     */
    hideNavBar() {
        let currentScrollPos = window.pageYOffset;
        //si on scroll vers le haut
        if (this.prevScrollPos > currentScrollPos || currentScrollPos < 200) {
            this._elNav.style.top = "0";
        } 
        //si on scroll vers le bas
        else {
            this._elNav.style.top = "-80px";
        }
        this.prevScrollPos = currentScrollPos;
    }

    /**
     * Display and remove the shopping list from the navigation bar.
     */
    async displayShoppingList() {
        if (this._elShopBigCtn.classList.contains('show-shop-list')) {
            this._elShopBigCtn.classList.remove('show-shop-list');
            this._elShopCtn.innerHTML = '';
        } else {
            this._elShopBigCtn.classList.add('show-shop-list');
            let localStorage = new LocalStorage();
            let itemsStored = localStorage.getLocalStorage();
            console.log(itemsStored.length);
            if (itemsStored.length === 0) {
                this._elShopBigCtn.querySelector('h3').innerHTML = 'Votre panier est vide.';
            } else {
                this._elShopBigCtn.querySelector('h3').innerHTML = 'Votre panier';
                let params = {limit:40}; // to get all products and not 8 by default
                const {data:{products}} = await axios.get(`/api/v1/products`, {params});
                let productsToDisplay = [];
                itemsStored.forEach(item => {
                    for (let product in products) {
                        if (products[product]._id === item.id) {
                            productsToDisplay.push(products[product]);
                            products[product].quant = item.quant;
                        }
                    }
                })
                productsToDisplay.forEach(product => {
                    const { _id, name, image, quant } = product;
                    let infos = { _id, name, image, quant };
                    new CloneItem(infos, this._elItemShopListTemplate, this._elShopCtn);
                })
            }
        }
        

        
    }



}