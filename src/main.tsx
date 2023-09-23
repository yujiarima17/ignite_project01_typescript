import React from 'react'
// integração entre o React core  e a DOM, 
import ReactDOM from 'react-dom/client'
import App from './App.js'


// definindo o elemento raíz da nossa aplicação , nesse caso a div#root
// ! garante que o valor realmente irá existir
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
