export default class Pagination {

    constructor(el, numPage) {
        this._el = el;
        this.numPage = numPage;
        this._elPageButtonTemplate = this._el.querySelector('[data-js-page-button-template]');

        this.init(this.numPage);
    }

    init(nb) {
        this.createPagination(nb);
    }


    createPagination(nb) {
        let elButtonTemplateClone = this._elPageButtonTemplate.cloneNode(true);
        let regExp = new RegExp(`{{number}}`, 'g');
        elButtonTemplateClone.innerHTML = elButtonTemplateClone.innerHTML.replace(regExp, nb)
        let newElItem = document.importNode(elButtonTemplateClone.content, true);
        this._el.append(newElItem);
        newElItem.addEventListener('click', this.getPage.bind(this));
    }

    getPage(e) {
        console.log(e.innerText)
    }
    // ajout class="active"

}