import Catalogue from './Catalogue.js';
import Product from './Product.js';
import Products from './Products.js';
import Navigation from './Navigation.js';

(function() {

    let pathname = window.location.pathname;
    console.log(pathname);

    new Navigation();
    
    if (pathname == "/catalogue.html") new Catalogue();
    else if (pathname == "/product.html") new Product();
    else {
        let params = {featured:'true'}
        new Products(params);
    }
    
})();