import Headphones from './pages/Headphones/Headphones';
import './App.css'
// import Header from './pages/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
// import data from "../resources/data.json";
import Speakers from './pages/Speakers/Speakers';
import Earphones from './components/HomeComp/EarphonesComponent';
import SinglePage from './pages/SinglePage/SinglePage';
import Checkout from './components/HomeComp/checkout/Checkout';
function App() {
  

  return (
    
      <div className='App'>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/headphones' element={<Headphones/>}/>
          <Route path='/speakers' element={<Speakers/>}/>
          <Route path='/earphones' element={<Earphones/>}/>
          <Route path='/details/:slug' element={<SinglePage />} />
          <Route path='/checkout' element={<Checkout/>}/>
        </Routes>
       </BrowserRouter>
      </div>
  )
}

export default App
