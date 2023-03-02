import React from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';

function Data() {
  const history=useNavigate();
  const Logout = async (e) =>{
    history('/');
  }

  return (
    <div className="data">
        <img src="https://i.postimg.cc/zf6N4PpL/welcome-gif.gif" alt=""/>
        <button className='btn'onClick={Logout}>Logout</button>
    </div>
  )
}

export default Data