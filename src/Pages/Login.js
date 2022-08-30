import React from 'react'
import { Link } from 'react-router-dom'
import fampic from '../Assets/Group 13.png'
import Button from '../Components/Button'
import '../Components/Login.css'

const Login = () => {
  return (
    <div className='login-page'>
        <div className='side-image'>
            <img src={fampic} alt='family' />
        </div>

        <div className='form'>
            <form>
              <h2>Welcome Back!</h2>
              <input type="email" placeholder="Your email address" className='email' required />
              <input type="password" placeholder="Your Password" suggested= "current-password" className='password' required />
              <Button text={'LOGIN'}/>
              <p><Link to ='/register'>Create an account</Link></p>
              <span>Forgot Password</span>
            </form>
        </div>

    </div>
  )
}

export default Login