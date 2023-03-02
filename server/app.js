const mongoose = require('mongoose');
const dotenv = require ('dotenv');
const express = require('express');
const cors = require('cors');
const app = express();
const User = require('./model/userShema');

dotenv.config()
const DB = process.env.DATABASE
const PORT = process.env.PORT

require('./db/conn');
app.use(express.json()); 

app.use(cors({
    origin: 'http://localhost:3000'
}));

//middelware
// const middelware = (req,res,next)=>{
//     console.log('This is my middleware');
//     next();
// }; 

app.post('/signUp',async (req,res) =>{
    const {email,password,cpassword} = req.body
    if( !email || !password || !cpassword){

        return res.status(422).json({ error:"require all the fields."});
       }  
       try{   
        const userExist = await User.findOne({ email:email });
        
            if(userExist) { 
                 res.status(409).json({ error:"Email already exist"});
            } else if( password != cpassword) {
                 res.status(422).json({ error:"Passwords are not matching"});                  
            } else{
                const user = new User({email,password,cpassword});
            
                await user.save();

                res.status(201).json({ message: "user registered successfully"});
            }
       }catch (err) {
        res.status(500).json(err);
       } 
    });   


app.post('/signin',async(req,res) =>{
    const { email,password } = req.body; 
    if(!email || !password) {
        return res.status(400).json({error:"Please enter the credentials"})
    }
    try{       
        const userLogin = await User.findOne({ email:email });
        if(userLogin){
    
            res.json({ message: "User Signin Successfully. "});
           
        }
        else{
            res.status(400).json({ error:"Invalid credentials."});
        }        
      }catch(err){
        console.log(err);  
      }  
});
 

app.get('/data',(req,res) =>{
    res.send('Hello data world from the server')
});
app.get('/logout',(req,res) =>{  
    res.status(200).send('user loggedout') ;
});  



app.listen(PORT,()=>{
    console.log(`server running at port ${PORT}`);
});
