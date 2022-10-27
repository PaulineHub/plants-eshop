import React, { useEffect, useState } from 'react'
import { api } from './api'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {

    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])
    const [cart, setCart] = useState(getLocalStorage)
    const [searchParams, setSearchParams] = useState(getSearchParamsFromUrl)

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
      console.log('searchParams', data)
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

    function getApiFilteredProducts(params) {
      api
        .getProducts(params)
        .then((products) => {
          setFilteredProducts(products)
        })
        .catch((e) => {
          setError(e)
        })
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

    

    return (
      <AppContext.Provider
        value={{
          cart,
          products,
          updateSearchParams,
          updateCart,
          getSearchParamsFromUrl,
        }}
      >
        {children}
      </AppContext.Provider>
    )
}


export { AppContext, AppProvider }
