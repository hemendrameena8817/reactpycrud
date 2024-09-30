import React from 'react';
import AddProduct from './component/AddProduct';
import ShowProduct from './component/ShowProduct';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Updated imports
import Navber from './component/Navber';


function App() {
  return (
    <div className='App'>
      <Router>
  <Navber/>
        <Routes> 
          <Route exact path='/' element={<ShowProduct />} />  
          <Route exact path='/addProduct' element={<AddProduct/>}/>
          
        
        </Routes>
      </Router>
    </div>
  );
}

export default App;
