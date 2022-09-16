import Catalogue from './Catalogue.js';
import Product from './Product.js';

(function() {

    let pathname = window.location.pathname;
    
    if (pathname == "/catalogue.html") new Catalogue();
    // http://localhost:3000/product.html?id=631fd044f02dc28ec8c4b1f6
    else if (pathname == "/product.html") {
        new Product();
        console.log(pathname)
    }
    
})();