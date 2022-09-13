import Pagination from './Pagination.js';
import Products from './Products.js';
import Router from './Router.js';

export default class Catalogue extends Router {

    constructor() {
        super();
        this.catalogueFields = '_id, createdAt, featured, category, image, name, price';
        this.productsPerPage = 8;
        this.maxNbOfProducts = 40;
        this._elProductsContainer = document.querySelector('.products-list');
        this._elFiltersContainer = document.querySelector('[data-js-catalogue-filter]');
        this._elFilterRadioButtons = this._elFiltersContainer.querySelectorAll('input[name="filter"');
        this._elFilterSelect = this._elFiltersContainer.querySelector('select');
        this._elPaginationContainer = document.querySelector('[data-js-pagination]');

        this.init();
    }

    init() {
        let params = this.getParamsInHash('products');
        if (params.category) this.checkRadioFilter(params.category);
        else this.checkRadioFilter('all')

        this.displayItems();

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
        console.log(radioFilter);
        const selectFilter = this._elFilterSelect.value;
        this.addQueriesInUrl(radioFilter, selectFilter);
        this.displayItems();
    }

    getSelectFilter() {
        let radioFilter = '';
        this._elFilterRadioButtons.forEach( elFilterRadioButton => {
            if (elFilterRadioButton.checked) {
                radioFilter = elFilterRadioButton.value;
            }
        }) 
        const selectFilter = this._elFilterSelect.value;
        this.addQueriesInUrl(radioFilter, selectFilter);
        this.displayItems();
    }
    
    async displayItems() {
        let filterQuery;
        let sortQuery;
        const urlParams = this.getParamsInHash('products');
        if (urlParams) {
            filterQuery = urlParams.category;
            sortQuery = urlParams.sort;
        }
        // set the params of the query
        let params = {};
        params.fields = '_id';
        if (filterQuery) {
            if (filterQuery == 'all') params = {};
            else params.category = filterQuery;
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
        if (sortQuery) params.sort = sortQuery;
        new Products(params);
        // display pagination
        this._elPaginationContainer.innerHTML = '';
        if (isPaginationRequired) {
            new Pagination(this._elPaginationContainer, nbPages, params);
        }
    }

    // getParamsInHash(slug) {
    //     let params = {};
    //     let url = window.location.hash;
    //     if (url) {
    //         let hashInArray = url.split(`#!/${slug}?`)[1].split('&');
    //         hashInArray.forEach(hash => {
    //             let infos = hash.split('=');
    //             params[infos[0]] = infos[1];
    //         })   
    //         return params;
    //     } else return false;
    // }

    // addQueriesInUrl(categoryFilter, sortFilter, pageFilter=false) {
    //     if (pageFilter) {
    //         window.location = `#!/products?category=${categoryFilter}&sort=${sortFilter}&page=${pageFilter}`;
    //     } else {
    //         window.location = `#!/products?category=${categoryFilter}&sort=${sortFilter}`;
    //     }
        
    // }
    

    
}