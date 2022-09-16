
export default class Router {

    getSearchParamsFromUrl(hashWord='') {
        const url = new URL(`${window.location.href}`);
        let params = {};
        let urlSearch;
        if (url.hash || url.search) {
            
            if (url.hash) urlSearch = url.hash.split(`#!/${hashWord}?`)[1];
            else if (url.search) urlSearch = url.search;

            let searchParams = new URLSearchParams(urlSearch);
            for (let key of searchParams.keys()) {
                params[key] = searchParams.get(key);
            }
            return params;
        }
         else return false;
    }

    updateSearchParamsInUrl(hashTerm, paramsObject) {
        const url = new URL(`${window.location.href}`);
        url.hash = `#!/${hashTerm}?`;
        let params = new URLSearchParams(url.search);
        for (let paramName in paramsObject) {
            params.append(paramName, paramsObject[paramName]);
        }
         window.location = `${url}${params}`;
    }
    

    
}