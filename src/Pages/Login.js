import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import fampic from '../Assets/Group 13.png'
import Button from '../Components/Button'
import '../Components/Login.css'

const Login = () => {
  
    const [loginData, setLoginData]= useState({
      email:'',
      password: '',
    })

    const handleChange =(e) =>{
      setLoginData({
        ...loginData,
        [e.target.name]: e.target.value
      })
    }
    const handleSubmit= (e)=>{
      e.preventDefault()
      let user =JSON.parse(sessionStorage.getItem('user'))
      if (loginData?.email===user.email && loginData?.password===user.password){
        toast.success('Login succesful!')
        window.location='/dashboard'
      }else{
        toast.error('Wrong User Details!')
      }
    }
    /*const [passwordType, setpasswordType]=useState('password')
    const [passwordInputType, setpasswordInputType] = useState("")

    const handlepassword=(e)=>{
      setpasswordInputType(e.target.value)
    }
    const togglePassword=(e)=>{
      e.preventDefault();
      if (passwordType==='password'){
        setpasswordType('text');
        return;
      }
      setpasswordType('password');
    }
    this helps to get the new value in the input box*/
  
 
  console.log(loginData)
  return (
    
    <div className='login-page'>
      <ToastContainer />
        <div className='side-image'>
            <img src={fampic} alt='family' />
        </div>

        <div className='form'>
            <form onSubmit={handleSubmit}>
              <h2>Welcome Back!</h2>
              <input type="email" placeholder="Your email address" name='email' className='email' required onChange={handleChange} />
              <input type="password" placeholder="Your Password" name='password' onChange={handleChange} className='password' required />
              <Button text={'LOGIN'}/>
              <p><Link to ='/register'>Create an account</Link></p>
              <span>Forgot Password</span>
            </form>
        </div>

    </div>
  )
}

export default Login