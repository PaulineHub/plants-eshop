import Catalogue from './Catalogue.js';
import Product from './Product.js';
import Products from './Products.js';

(function() {

    let pathname = window.location.pathname;
    
    if (pathname == "/catalogue.html") new Catalogue();
    else if (pathname == "/product.html") new Product();
    else if (pathname == "/index.html") {
        let params = {featured:'true'}
        new Products(params);
    }
    
})();