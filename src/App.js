import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import {BrowserRouter,Link,Route,Routes} from 'react-router-dom';
import Products from './components/Products';
import NewProduct from './components/NewProduct';
import  'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';

function App() {
  const [currentRoute,setRoute] = useState("Home");
  return (
  
  <BrowserRouter>
  <nav className='m-1 p-1 border border-outline'>
<ul className='nav na-pills'>
  <li>
    <Link 
    onClick={()=>setRoute("Home")}
    className={currentRoute =='Home' ?'btn btn-info ms-1':'btn btn-outline-info ms-1'} to={"/Home"}>Home</Link>
  </li>
  <li>
  
    <Link onClick={()=>setRoute("Products")}
    className={currentRoute =='Products' ?'btn btn-info ms-1':'btn btn-outline-info ms-1'} to={"/Products"}>Products</Link>
  </li>
</ul>
</nav>
  <Routes>
    <Route path='/Home' element={<Home/>}></Route>
    <Route path='/Products' element={<Products/>}></Route>
    <Route path='/NewProduct' element={<NewProduct/>}></Route>
  </Routes>
  
   </BrowserRouter>
  );
}

export default App;
