
export default class Router {

    getSearchParamsFromUrl(hash) {
        const url = new URL(`${window.location.href}`);
        let params = {};
        if (url.hash) {
            let urlSearch = url.hash.split(`#!/${hash}?`)[1];
            let searchParams = new URLSearchParams(urlSearch);
            for (let key of searchParams.keys()) {
                params[key] = searchParams.get(key);
            }
            return params;
        } else return false;
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