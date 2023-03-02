import './App.css';
import React from "react";
import Logins from './components/Logins';
import Register from './components/Register';
import Data from './components/Data';
import { Routes,Route } from 'react-router-dom';  

function App() {
  return (
  <>
    {/* <Logins/> */}
    <Routes>
      <Route path='/' element={<Logins/>}/>
      <Route path='/Register' element={<Register/>}/>
      <Route path='/Data' element={<Data/>}/>
    </Routes>
  </>
  );
}

export default App;
