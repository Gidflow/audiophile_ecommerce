import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import SinglePageContext from './pages/SinglePage/singlePageContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SinglePageContext>
    <App />
      </SinglePageContext> 
   
  </React.StrictMode>,
)
