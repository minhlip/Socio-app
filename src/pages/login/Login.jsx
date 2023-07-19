import React, { useContext,useState } from 'react'
import "./login.scss"
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/authContext'
import axios from 'axios'

const Login = () => {
  const [inputs,setInputs] = useState({
    username: "",
    password: "",
  })
  const navigate = useNavigate()
  const [err,setErr] = useState(null)
  console.log(err)

  const handleChange = (e) =>{
    setInputs(prev => ({...prev, [e.target.name]: e.target.value}))
  }
  const {login}  = useContext(AuthContext)

  const handleLoggin = async(e) =>{
    e.preventDefault()
    try{
      await login(inputs)
      navigate("/")
    }catch(err){
      setErr(err.response.data)
    } 
  }

   

  return (
        <div className='login'>
          <div className='card'>
            <div className='left'>
              <h1>Welcome to Socio </h1>
              <p>We provide a platform where people can find and meet together</p>
              <span>Don't you have an account? </span>
              <Link to="/register">
              <button>Register</button>
              </Link>
            </div>

            <div className='right'>
              <h1>Login</h1>
              <form>
                <input type='text' placeholder='Username' name='username' onChange={handleChange}/>
                <input type="password" placeholder='Password'
                name='password' onChange={handleChange}/>
                {err && err}
                <button onClick={handleLoggin}>Log in</button>
              </form>
            </div>
          </div>
        </div>
  )
}

export default Login
