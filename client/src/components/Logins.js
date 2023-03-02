import React,{useState} from 'react';
import './login.css';
import { NavLink,useNavigate } from 'react-router-dom';
import axios from 'axios';

function Logins() {
    const history=useNavigate();

    const [email,setEmail] = useState('');
    const [password,setPwd] = useState('');

    const login = async (e) => {
        e.preventDefault();
      
        try {
          const response = await axios.post('http://localhost:4200/signin', {
            email,
            password
          });
      
          console.log(response.data); // handle response here
          const data = response.data;
          console.log(data);
        if(response.status === 400 || !data){
            alert("Invalid credentials");
            console.log("Invalid credentials");
        }else {
            alert("Login succesful");
            console.log("Login successful");
            history('/Data');
            
        } 

        } catch (error) {
          console.error(error); // handle error here
        }
        setEmail("");
        setPwd("");
      };
      
  return (
      <div className="login-wrapper">
          <form className="form">
              <img src="https://i.postimg.cc/zGMHN6Yn/avatar.png" alt="" />
              <h2>Login</h2>
              <div className="input-group">
                  <input type="email" name="email" id="email" required  value={email} onChange={(e)=> setEmail(e.target.value)}/>
                  <label>Email</label>
              </div>
              <div className="input-group">
                  <input type="password" name="loginPassword" id="loginPassword" required value={password} onChange={(e)=> setPwd(e.target.value)}/>
                  <label>Password</label>
              </div>
                  <input type="submit" value="Login" className="submit-btn" onClick={login}/>
                  <p>Not a User?<NavLink className="forgot-pw" to ="/Register"> Register</NavLink></p> 
          </form>
      </div>
  );
}

export default Logins