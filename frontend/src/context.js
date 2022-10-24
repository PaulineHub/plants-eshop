import React, { useEffect, useState } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {

  const [cart, setCart] = useState([]);

  useEffect(() => {
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

  return (
    <AppContext.Provider value={{cart, updateCart}}>
      {children}
    </AppContext.Provider>
  )
}


export { AppContext, AppProvider }
