import Products from './Products.js';
import Router from './Router.js';

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

    init(nb) {
        this.createPagination(nb); 
        // listen events
        this._elPageButtons = this._el.querySelectorAll('button');
        this._elPageButtons.forEach(elPageButton => {
            elPageButton.addEventListener('click', this.getPage.bind(this));
        })
        // add style to current page button
        const activeButton = document.querySelector(`[data-js-page-id='${this.activePage}']`);
        this.addClassActive(activeButton);
    }


    createPagination(nb) {
        for (let i = 1; i <= nb; i++) {
            let elButtonTemplateClone = this._elPageButtonTemplate.cloneNode(true);
            let regExp = new RegExp(`{{number}}`, 'g');
            elButtonTemplateClone.innerHTML = elButtonTemplateClone.innerHTML.replace(regExp, i)
            let newElItem = document.importNode(elButtonTemplateClone.content, true);
            this._el.append(newElItem);
        }
    }

    async getPage(e) {
        const button = e.target;
        let numPage = button.innerText;
        this.params.page = numPage;
        this.addClassActive(button); 
        this.updateSearchParamsInUrl(this.hash, { 'sort':this.params.sort, 'page':this.params.page });
        new Products(this.params);
        
    }

    // ameliorable avec cette ressource
    //https://www.w3schools.com/howto/howto_js_active_element.asp
    addClassActive(buttonClicked) {
        this._elPageButtons.forEach(elPageButton => {
            elPageButton.classList.remove('active');
        });
        buttonClicked.classList.add('active');
    }

}