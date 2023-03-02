import React,{useState} from 'react';
import './login.css';
import { NavLink,useNavigate } from 'react-router-dom';
import axios from 'axios';

function Register() {

    const history=useNavigate();
    const [user,setUser] = useState({email: "",password: "",cpassword: ""});
    
    let name,value;
    const handleInputs = (e) =>{
        console.log(e);
        name = e.target.name;
        value = e.target.value; 
        
        setUser({ ...user, [name]:value});
    
      };
      const postData = async (e) => {
        e.preventDefault();
      
        const { email,password,cpassword} = user;
      
        try {
          const response = await axios.post('http://localhost:4200/signUp', {
            email,
            password,
            cpassword
          });
      
          const data = response.data
          console.log(data);
          if(response.status === 409 || !data){
              alert("Invalid...");
              console.log("Invalid...require all the field");
          }
          else if(response.status === 422){
            alert("Passwords are not matching")
          }
          else{
            console.log("valid...");
            alert("valid...")
            history('/');
          }
        } catch (error) {
          console.error(error); // handle error here
        }
      };

  return (
    <div className="login-wrapper">
          <form action="" className="form">
              <img src="https://i.postimg.cc/zGMHN6Yn/avatar.png" alt="" />
              <h2>Register</h2>
              <div className="input-group">
                  <input type="email" name="email" id="email" required onChange={handleInputs} value={user.email}/>
                  <label>Email</label>
              </div>
              <div className="input-group">
                  <input type="password" name="password" id="loginPassword" required onChange={handleInputs} value={user.password}/>
                  <label>Password</label>
              </div>
              <div className="input-group">
                  <input type="password" name="cpassword" id="cloginPassword" required onChange={handleInputs} value={user.cpassword}/>
                  <label>Confirm Password</label>
              </div>
              <input type="submit" value="Register" className="submit-btn" onClick={postData}/>
              <p>Already a User?<NavLink className="forgot-pw" to ="/">Login</NavLink></p> 
          </form>
      </div>
  )
}

export default Register