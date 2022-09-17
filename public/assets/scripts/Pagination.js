import Products from './Products.js';
import Router from './Router.js';
import CloneItem from './CloneItem.js';

export default class Pagination extends Router {

    constructor(el, pageTotal, params, hash) {
        super();
        this._el = el;
        this.pageTotal = pageTotal;
        this.params = params;
        this.activePage = this.params.page;
        this._elPageButtonTemplate = document.querySelector('[data-js-page-button-template]');
        this._elPageButtons = '';
        this.hash = hash;
        this.init(this.pageTotal);
    }

    /**
     * Set the initial behaviors.
     * @param {number} nb - The number of pages button to create.
     */
    init(nb) {
        // create pagination
        for (let i = 1; i <= nb; i++) {
            let infos = {number: i};
            new CloneItem(infos, this._elPageButtonTemplate, this._el);
        } 
        // listen events
        this._elPageButtons = this._el.querySelectorAll('button');
        this._elPageButtons.forEach(elPageButton => {
            elPageButton.addEventListener('click', this.getPage.bind(this));
        })
        // add style to current page button
        const activeButton = document.querySelector(`[data-js-page-id='${this.activePage}']`);
        this.addClassActive(activeButton);
    }

    /**
     * Get the page clicked, update the url, display the products and add the class active on the page button.
     * @param {string} e - Event.
     */
    async getPage(e) {
        const button = e.target;
        let numPage = button.innerText;
        this.params.page = numPage;
        this.addClassActive(button); 
        this.updateSearchParamsInUrl(this.hash, { 'sort':this.params.sort, 'page':this.params.page });
        new Products(this.params);
    }

    /**
     * Add the class active on the page button clicked.
     * @param {string} buttonClicked - The button clicked.
     */
    addClassActive(buttonClicked) {
        this._elPageButtons.forEach(elPageButton => {
            elPageButton.classList.remove('active');
        });
        buttonClicked.classList.add('active');
    }

}