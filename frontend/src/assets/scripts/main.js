import Catalogue from './Catalogue.js';
import Product from './Product.js';
import Products from './Products.js';
import Navigation from './Navigation.js';
import Carousel from './Carousel.js';

(function() {

    let pathname = window.location.pathname;
    new Navigation();
    
    if (pathname == "/catalogue.html") new Catalogue();
    else if (pathname == "/product.html") new Product();
    else if (pathname == "/index.html" || pathname == "/" ) {
        let params = {featured:'true'};
        new Products(params);
        
    }
    
})();

