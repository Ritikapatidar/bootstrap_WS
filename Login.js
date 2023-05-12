import info from '../assets/data.json'
import { useNavigate } from 'react-router-dom';
import {useState} from 'react';

function Login() {
    const [data, setData]=useState(info)
    const [login, setLogin]=useState({})
    const navigate= useNavigate();

    fetch('/assets/data.json')
    .then(response => response.json())
    .then(dataa => setData(dataa));

    

    const handleChange=(e)=>{
     setLogin({...login, [e.target.name]:e.target.value})
    }
    
    const handleLogin=(e)=>{
        e.preventDefault();
        console.log(data);
        console.log("data: ",login);
        info.users.map((item)=>{
        if(item.userName==login.uname && item.password==login.password){
            navigate(`/Home/${item.userName}/${item.role}`)
        }}
        )
    }
    return ( 
       <div className="container">
    <form onChange={handleChange}>
        <h1 className='text-center'>Login Form</h1>
       <div className="mb-3">
         <label htmlFor="uname" className="htmlForm-label">Enter Username</label>
         <input type="text" name="uname" id="uname" className="form-control" placeholder="username"  />
       </div>
       <div className="mb-3">
         <label htmlFor="password" className="htmlForm-label">Enter password</label>
         <input type="text" name="password" id="password" className="form-control" placeholder="password" />
       </div>

      <button type='submit' onClick={handleLogin}>Login</button>
     
    </form>
       </div>
       
    );
}

export default Login;