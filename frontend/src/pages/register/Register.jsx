import { useState } from "react";

const Register = () =>{
    const [data,setData]=useState({
        username:undefined,
        email:undefined,
        password:undefined
    })
    const handleChange = (e) =>{
        setData=((prev)=>({
            ...prev,[e.target.id]:e.target.value
        }))
    }

    const handleClick = () =>{
        
    }

    return(
        <div>
        <label id="username">Enter Username: </label>
        <input type="text" id="username" onChange={handleChange} placeholder="Enter Username: " />
        <br/>
        <label id="email">Enter Email: </label>
        <input type="email" id="email" onChange={handleChange} placeholder="Enter Username: " />
        <br/>
        <label id="username">Enter Password: </label>
        <input type="password" id="password" onChange={handleChange} placeholder="Enter password: " />
        <br/>
        <button onClick={handleClick} className="lButton">Register</button>
        </div>
    )
}
export default Register;