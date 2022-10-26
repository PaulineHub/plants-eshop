import React, { useEffect, useState } from 'react'
import { api } from './api'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {

    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([]);

    useEffect( () => {
        getApiProducts();
        setCart(getLocalStorage);
    }, [])

    const updateCart = (data) => {
      setCart(data);
    };

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

    

    return (
    <AppContext.Provider value={{cart, products, updateCart}}>
        {children}
    </AppContext.Provider>
    )
}


export { AppContext, AppProvider }
