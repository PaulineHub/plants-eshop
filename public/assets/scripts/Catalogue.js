import Pagination from './Pagination.js';
import Products from './Products.js';

export default class Catalogue {

    constructor(idFilter) {
        this._idFilter = idFilter;
        this.catalogueFields = '_id, createdAt, featured, category, image, name, price';
        this.productsPerPage = 8;
        this.maxNbOfProducts = 40;
        this._elProductsContainer = document.querySelector('.products-list');
        this._elFiltersContainer = document.querySelector('[data-js-catalogue-filter]');
        this._elFilterRadioButtons = this._elFiltersContainer.querySelectorAll('input[name="filter"');
        this._elFilterSelect = this._elFiltersContainer.querySelector('select');
        this._elPaginationContainer = document.querySelector('[data-js-pagination]');

        this.init(this._idFilter);
    }

    init(filter) {
        this.checkRadioFilter(filter);
        this.displayItems(filter);

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
        } else if (filterQuery == 'plantes' || filterQuery == 'fleurs' || filterQuery == 'cactus') {
            params.category = filterQuery;
        } else if (filterQuery == 'featured') {
            params.featured = 'true';
        }
        // get the total of products for pagination
        params.limit = this.maxNbOfProducts;
        params.fields = '_id';
        let nbPages = 1;
        let isPaginationRequired = false;
        try {
            const {data} = await axios.get(`/api/v1/products`, { params });
            let productsQuantity = data.products.length;
            if (productsQuantity > this.productsPerPage) {
                isPaginationRequired = true;
                while (productsQuantity > this.productsPerPage) {
                    nbPages++;
                    productsQuantity -= this.productsPerPage;
                }
            }
            
        } catch (error) {
            console.log(error);
        }
        // get the products
        params.limit = this.productsPerPage;
        params.fields = this.catalogueFields;
        params.sort = sortQuery;
        new Products(params);
        // display pagination
        this._elPaginationContainer.innerHTML = '';
        if (isPaginationRequired) {
            new Pagination(this._elPaginationContainer, nbPages, params);
        }
    }
    

    
}