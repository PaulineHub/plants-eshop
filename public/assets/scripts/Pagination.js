import Products from './Products.js';
import Router from './Router.js';

export default class Pagination extends Router {

    constructor(el, numPage, params) {
        super();
        this._el = el;
        this.numPage = numPage;
        this._elPageButtonTemplate = document.querySelector('[data-js-page-button-template]');
        this._elPageButtons = '';
        this.params = params;

        this.init(this.numPage);
    }

    init(nb) {
        this.createPagination(nb);
    }


    createPagination(nb) {
        for (let i = 1; i <= nb; i++) {
            let elButtonTemplateClone = this._elPageButtonTemplate.cloneNode(true);
            let regExp = new RegExp(`{{number}}`, 'g');
            elButtonTemplateClone.innerHTML = elButtonTemplateClone.innerHTML.replace(regExp, i)
            let newElItem = document.importNode(elButtonTemplateClone.content, true);
            this._el.append(newElItem);
        }
        // listen events
        this._elPageButtons = this._el.querySelectorAll('button');
        this._elPageButtons.forEach(elPageButton => {
            elPageButton.addEventListener('click', this.getPage.bind(this));
        })
    }

    async getPage(e) {
        const button = e.target;
        let numPage = button.innerText;
        this.params.page = numPage;
        this.addClassActive(button); 
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