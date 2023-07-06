import React from 'react'
import "./register.scss"
import { Link } from 'react-router-dom'
const Register = () => {
  return (
        <div className='register'>
          <div className='card'>
            <div className='left'>
            <h1>Register</h1>
              <form>
                <input type='text' placeholder='Username'/>
                <input type='email' placeholder='Email'/>
                <input type='name' placeholder='Name'/>
                <input type="password" placeholder='Password'/>
                <button>Register</button>
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

