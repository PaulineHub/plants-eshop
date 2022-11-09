import React from 'react'
import ReactDOM from 'react-dom';
import './assets/styles/styles.css';
import App from './App';
import { AppProvider } from './context'


ReactDOM.render(
  <AppProvider>
    <App />
  </AppProvider>,
  document.getElementById('root')
)

// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// )