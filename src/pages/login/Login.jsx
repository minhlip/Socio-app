import React, { useContext } from 'react'
import "./login.scss"
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/authContext'

const Login = () => {
  
  const {login}  = useContext(AuthContext)
  const handleLoggin = () =>{
    login()
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
                <input type='text' placeholder='Username'/>
                <input type="password" placeholder='Password'/>
                <button onClick={handleLoggin}>Log in</button>
              </form>
            </div>
          </div>
        </div>
  )
}

export default Login
