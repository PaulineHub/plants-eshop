import Pagination from './Pagination.js';

export default class Catalogue {

    constructor(id) {
        this._id = id;
        this.catalogueFields = '_id, createdAt, featured, category, image, name, price';
        this.productsPerPage = 8;
        this.maxNbOfProducts = 40;
        this._elProductsContainer = document.querySelector('.products-list');
        this._elItemTemplate = document.querySelector('[data-js-item-template]');
        this._elFiltersContainer = document.querySelector('[data-js-catalogue-filter]');
        this._elFilterRadioButtons = this._elFiltersContainer.querySelectorAll('input[name="filter"');
        this._elFilterSelect = this._elFiltersContainer.querySelector('select');
        this._elPaginationContainer = document.querySelector('[data-js-pagination]');

        this.init(this._id);
    }

    init(id) {
        this.checkRadioFilter(id);
        this.displayItems(id);

        this._elFilterRadioButtons.forEach( elFilterRadioButton => {
            elFilterRadioButton.addEventListener('click', this.getRadioFilter.bind(this))
        })
        this._elFilterSelect.addEventListener('change',this.getSelectFilter.bind(this))
    }

    checkRadioFilter(id) {
        const radioButton = document.querySelector(`#${id}`);
        radioButton.checked = true;
    }

    getRadioFilter(e) {
        const radioFilter = e.target.value;
        const selectFilter = this._elFilterSelect.value;
        this.displayItems(radioFilter, selectFilter);
    }

    getSelectFilter() {
        let radioFilter = '';
        this._elFilterRadioButtons.forEach( elFilterRadioButton => {
            console.log(elFilterRadioButton)
            if (elFilterRadioButton.checked) {
                radioFilter = elFilterRadioButton.value;
            }
        }) 
        const selectFilter = this._elFilterSelect.value;
        this.displayItems(radioFilter, selectFilter);
    }
    
    async displayItems(filterQuery='all', sortQuery='createdAt') {
        // set the params of the query
        let params = {};
        params.fields = '_id';
        if (filterQuery == 'all') {
            params = {};
        } else if (filterQuery == 'plantes' || 'fleurs' || 'cactus') {
            params.category = filterQuery;
        } else if (filterQuery == 'featured') {
            params.featured = 'true';
        }
        // get number of products for pagination
        params.limit = this.maxNbOfProducts;
        params.fields = '_id';
        try {
            const {data} = await axios.get(`/api/v1/products`, { params });
            let productsQuantity = data.products.length;
            console.log('product quant ', productsQuantity);
            let nbPage = 1;
            while (productsQuantity > this.productsPerPage) {
                new Pagination(this._elPaginationContainer, nbPage);
                nbPage++;
                productsQuantity -= this.productsPerPage;
            }
            console.log('nb pages', nbPage)
            
        } catch (error) {
            console.log(error);
        }
        // get the products
        params.limit = this.productsPerPage;
        params.sort = sortQuery;
        params.fields = this.catalogueFields;
        try {
            const {data} = await axios.get(`/api/v1/products`, { params });
            //console.log(data)
            this.clearItems();
            data.products.forEach(product => {
                this.createItem(product);
            })
        } catch (error) {
            console.log(error);
        }
    }
    

    clearItems() {
        this._elProductsContainer.innerHTML = '';
    }

    createItem(item) {
        let infos = {
                id: item._id,
                title: item.name,
                image: item.image,
                category: item.category,
                price: item.price
            }
            let elItemTemplateClone = this._elItemTemplate.cloneNode(true);

            for (const cle in infos) {
                let regExp = new RegExp(`{{${cle}}}`, 'g');
                elItemTemplateClone.innerHTML = elItemTemplateClone.innerHTML.replace(regExp, infos[cle])
            }

            let newElItem = document.importNode(elItemTemplateClone.content, true);
            this._elProductsContainer.append(newElItem);
    }
}