import Catalogue from './Catalogue.js'

(function() {

    let url = window.location.href,
        page = url.split("/").slice(-1)[0]; // last element of the url
    
    if (page == "catalogue.html") {
        new Catalogue();
    }
    
})();