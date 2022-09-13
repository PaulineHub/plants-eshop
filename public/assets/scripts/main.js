import Catalogue from './Catalogue.js'

(function() {

    let pathname = window.location.pathname;
    
    if (pathname == "/catalogue.html") {
        new Catalogue();
    };
    
})();