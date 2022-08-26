import React from 'react'
import fampic from '../Assets/Group 13.png'
import Button from '../Components/Button'

const Login = () => {
  return (
    <div className='login-page'>
        <div>
            <img src={fampic} alt='family' />
        </div>

        <div className='text'>
            <h2>Welcome Back!</h2>
            <input type="email" placeholder="Your email address" className='email' required />
            <input type="email" placeholder="Your Password" className='password' required />
            <Button text={'LOGIN'}/>
            <p className='create'>Create an account</p>
            <span className='forgot'>Forgot Password</span>
        </div>

    </div>
  )
}

export default Login