import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import { useState } from 'react';
import SharedLayout from './pages/SharedLayout'
import Home from './pages/Home';
import About from './pages/About';
// import Products from './pages/Products';
// import Error from './pages/Error';
// import SingleProduct from './pages/SingleProduct';
// import SharedProductLayout from './pages/SharedProductLayout';

function App() {
  // return (
  //   <BrowserRouter>
  //     <Routes>
  //       <Route path='/' element={<SharedLayout />}>
  //         <Route index element={<Home />} />
          
  //         <Route path='about' element={<About />} />

  //         <Route path='products' element={<SharedProductLayout />}>
  //           <Route index element={<Products />} />
  //           <Route path=':productId' element={<SingleProduct />} />
  //         </Route>

  //         <Route path='*' element={<Error />} />
  //       </Route>
  //     </Routes>
  //     <footer>footer</footer>
  //   </BrowserRouter>
  // )
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
