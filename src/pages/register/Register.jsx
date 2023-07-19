import React, { useState } from 'react'
import "./register.scss"
import { Link } from 'react-router-dom'
import axios from "axios"
const Register = () => {
  const [inputs,setInputs] = useState({
    username: "",
    email: "",
    password: "",
    name: ""
  })

  const [err,setErr] = useState(null)
  console.log(err)

  const handleChange = (e) =>{
    setInputs(prev => ({...prev, [e.target.name]: e.target.value}))
  }
  const handleClick = async e => {
    e.preventDefault()
    try{
      await axios.post("http://localhost:8800/api/auth/register", inputs)
    }catch(err){
      setErr(err.response.data)
    }
  }
  return (
        <div className='register'>
          <div className='card'>
            <div className='left'>
            <h1>Register</h1>
              <form>
                <input type='text' placeholder='Username' name='username' onChange={handleChange}/>
                <input type='email' placeholder='Email' name='email' onChange={handleChange}/>
                <input type='name' placeholder='Name' name='name' onChange={handleChange}/>
                <input type="password" placeholder='Password' name='password' onChange={handleChange}/>

                <div className='error'>{err}</div>
                <button onClick={handleClick}>Register</button>
              </form>
            </div>

            <div className='right'>
            <h1>Welcome to Socio </h1>
              <p>We provide a platform where people can find and meet together</p>
              <span>Do you have an account?</span>
              <Link to="/login">
              <button>Login</button>
              </Link>
            </div>
          </div>
        </div>
  )
}

export default Register

