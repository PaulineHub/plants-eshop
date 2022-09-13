
export default class Router {

    getParamsInHash(slug) {
        let params = {};
        let url = window.location.hash;
        if (url) {
            let hashInArray = url.split(`#!/${slug}?`)[1].split('&');
            hashInArray.forEach(hash => {
                let infos = hash.split('=');
                params[infos[0]] = infos[1];
            })   
            return params;
        } else return false;
    }

    addQueriesInUrl(categoryFilter, sortFilter, pageFilter=false) {
        if (pageFilter) {
            window.location = `#!/products?category=${categoryFilter}&sort=${sortFilter}&page=${pageFilter}`;
        } else {
            window.location = `#!/products?category=${categoryFilter}&sort=${sortFilter}`;
        }
        
    }
    

    
}