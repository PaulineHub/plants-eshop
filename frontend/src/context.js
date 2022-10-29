import React, { useEffect, useState } from 'react'
import { api } from './api'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {

    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])
    const [cart, setCart] = useState(getLocalStorage)
    const [searchParams, setSearchParams] = useState(getSearchParamsFromUrl)
    const [pages, setPages] = useState([1])

    useEffect( () => {
        setCart(getLocalStorage);
        getApiProducts()
    }, [])

    useEffect(() => {
      getApiFilteredProducts(searchParams)
    }, [searchParams])


    const updateCart = (data) => {
      setCart(data);
    };

    const updateSearchParams = (data) => {
      setSearchParams(data);
    }

    function getLocalStorage() {
      return localStorage.getItem('shoppingList')
          ? JSON.parse(localStorage.getItem('shoppingList'))
          : []
    }

    function getApiProducts() {
      api
        .getProducts()
        .then((products) => {
          setProducts(products)
        })
        .catch((e) => {
          setError(e)
        })
    }

    function getApiFilteredProducts(urlParams) {
      // set the params of the query
      let params = {}
      if (urlParams.category) {
        if (urlParams.category == 'all') {
          params = {} // we don't send any category filter
          if (!urlParams.page) params.page = '1'
        } else params.category = urlParams.category
      }
      // get the total of products for pagination
      calculateNbPages(params)
      .then((nbPages) => {
        // get the products
        params.limit = 8
        params.fields = '_id, createdAt, featured, category, image, name, price'
        if (urlParams.sort) params.sort = urlParams.sort
        else params.sort = 'createdAt'
        if (urlParams.page) params.page = urlParams.page
        else params.page = '1'
        api
          .getProducts(params)
          .then((products) => {
            setFilteredProducts(products)
          })
          .catch((e) => {
            setError(e)
          })
      })
    }

    async function calculateNbPages(params) {
        params.limit = 40;
        params.fields = '_id';
        let nbPages = 1;
        try {
            const  products  = await api.getProducts(params)
            let productsQuantity = products.length;
            if (productsQuantity > 8) {
                while (productsQuantity > 8) {
                    nbPages++;
                    productsQuantity -= 8;
                }
            }
        } catch (error) {
            console.log(error);
        }
        
        let pagesArray = []
        for (let i = 1; i <= nbPages; i++) {
          pagesArray.push(i)
        }
        setPages(pagesArray)
  
        return nbPages;
    }

    function getSearchParamsFromUrl() {
      const url = new URL(`${window.location.href}`)
      let params = { category: 'all', sort: 'createdAt' }
      let urlSearch
      if (url.hash || url.search) {
        if (url.hash) urlSearch = url.hash.split(`#!/products?`)[1]
        else if (url.search) urlSearch = url.search

        let searchParams = new URLSearchParams(urlSearch)
        for (let key of searchParams.keys()) {
          params[key] = searchParams.get(key)
        }
      }
      return params
    }

    function updateSearchParamsInUrl(paramsObject) {
      const url = new URL(`${window.location.href}`)
      url.hash = `#!/products?`
      let params = new URLSearchParams(url.search)
      for (let paramName in paramsObject) {
        params.append(paramName, paramsObject[paramName])
      }
      window.location = `${url}${params}`
    }

    

    return (
      <AppContext.Provider
        value={{
          cart,
          products,
          filteredProducts,
          pages,
          searchParams,
          updateSearchParams,
          updateCart,
          getSearchParamsFromUrl,
          updateSearchParamsInUrl,
        }}
      >
        {children}
      </AppContext.Provider>
    )
}


export { AppContext, AppProvider }
