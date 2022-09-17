import Pagination from './Pagination.js';
import Products from './Products.js';
import Router from './Router.js';
import MobileFilters from './MobileFilters.js';

export default class Catalogue extends Router {

    constructor() {
        super();
        this.catalogueFields = '_id, createdAt, featured, category, image, name, price';
        this.productsPerPage = 8;
        this.maxNbOfProducts = 40;
        this.hash = 'products';
        this._elProductsContainer = document.querySelector('.products-list');
        this._elFiltersContainer = document.querySelector('[data-js-catalogue-filter]');
        this._elFilterRadioButtons = this._elFiltersContainer.querySelectorAll('input[name="filter"');
        this._elFilterSelect = this._elFiltersContainer.querySelector('select');
        this._elPaginationContainer = document.querySelector('[data-js-pagination]');

        this.init();
    }

    /**
     * Set the initial behaviors.
     */
    init() {
        // display filters in mobile vue
        new MobileFilters(this._elFiltersContainer);

        //initial setting
        let params = this.getSearchParamsFromUrl(this.hash);
        if (params.category) this.checkRadioFilter(params.category);
        else this.checkRadioFilter('all')
        if (params.select) this.selectSortFilter(params.select);
        else this.selectSortFilter('createdAt')

        // display products
        this.displayItems();

        //listen event on filter buttons
        this._elFilterRadioButtons.forEach( elFilterRadioButton => {
            elFilterRadioButton.addEventListener('click', this.getRadioFilter.bind(this))
        })
        this._elFilterSelect.addEventListener('change',this.getSortFilter.bind(this))
    }

    /**
     * Check a radio button of the filters.
     * @param {string} id - The id of the button to check.
     */
    checkRadioFilter(id) {
        const radioButton = document.querySelector(`#${id}`);
        radioButton.checked = true;
    }

    /**
     * Select an option of the sort filter.
     * @param {string} optionToselect - The option to select.
     */
    selectSortFilter(optionToselect){
        let options = Array.from(this._elFilterSelect.options)
        for (let n in options){
            if (options[n].value == optionToselect) options[n].selected = true;
        }
    }

    /**
     * Get the filter value clicked, the current sort value, update the search params in the url and display the product items.
     * @param {string} e - Event
     */
    getRadioFilter(e) {
        const radioFilter = e.target.value;
        const selectFilter = this._elFilterSelect.value;
        this.updateSearchParamsInUrl(this.hash, {'category':radioFilter, 'sort':selectFilter});
        this.displayItems();
    }

    /**
     * Get the sort value changed, the current filter value, update the search params in the url and display the product items.
     */
    getSortFilter() {
        let radioFilter = '';
        this._elFilterRadioButtons.forEach( elFilterRadioButton => {
            if (elFilterRadioButton.checked) {
                radioFilter = elFilterRadioButton.value;
            }
        }) 
        const selectFilter = this._elFilterSelect.value;
        this.updateSearchParamsInUrl(this.hash, {'category':radioFilter, 'sort':selectFilter});
        this.displayItems();
    }
    
    /**
     * Display the products and the pagination.
     */
    displayItems() {
        const urlParams = this.getSearchParamsFromUrl(this.hash);
        // set the params of the query
        let params = {};
        if (urlParams.category) {
            if (urlParams.category == 'all') {
                params = {}; // we don't send any category filter
                if (!urlParams.page) params.page = '1';
            }
            else params.category = urlParams.category;
        } 
        // get the total of products for pagination
        this.calculateNbPages(params)
        .then(nbPages => {
            // get the products
            params.limit = this.productsPerPage;
            params.fields = this.catalogueFields;
            if (urlParams.sort) params.sort = urlParams.sort;
            else params.sort = 'createdAt';
            if (urlParams.page) params.page = urlParams.page;
            else params.page = '1';
            new Products(params);
            // display pagination
            this._elPaginationContainer.innerHTML = '';
            if (nbPages > 1) {
                new Pagination(this._elPaginationContainer, nbPages, params, this.hash);
            }
        })
    }

    /**
     * Calculate the number of pages needed to display the products.
     * @param {object} params - The parameters to pass to the request.
     * @return {number} - The number of pages.
     */
    async calculateNbPages(params) {
        params.limit = this.maxNbOfProducts;
        params.fields = '_id';
        let nbPages = 1;
        try {
            const {data} = await axios.get(`/api/v1/products`, { params });
            let productsQuantity = data.products.length;
            if (productsQuantity > this.productsPerPage) {
                while (productsQuantity > this.productsPerPage) {
                    nbPages++;
                    productsQuantity -= this.productsPerPage;
                }
            }
        } catch (error) {
            console.log(error);
        }
        return nbPages;
    }
    

    
}