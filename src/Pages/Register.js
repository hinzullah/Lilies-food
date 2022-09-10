import React, { useState } from 'react'
import plantain from '../Assets/Group 14.png'
import Button from '../Components/Button'
import { Link } from 'react-router-dom'
import '../Components/Register.css'
import { ToastContainer, toast } from 'react-toastify';



const Register = () => {
  /*useState here used for initializing values in the box*/
  const [form, setform] = useState({
    name: '',
    email: '',
    password: ''
  })
/*this helps to get the new value in the input box*/
  const handleChange =(e) =>{
    setform({
      ...form,
      [e.target.name]: e.target.value
    })
  }
  
/*This helps to store the values when the submit button is clicked.Its saved in the session storage */
  const handleSubmit= (e)=>{
    e.preventDefault()
    sessionStorage.setItem('user', JSON.stringify(form))

    toast.success('Sign up succesful')
/*This set interval and pop up a congratulation message at the given interval and proceed to the login page  */
    setInterval(() => {
      window.location= '/login'
    }, 1500);
  }
  return (
    <div>
            <ToastContainer />
            <div className='signup'>
                <img src={plantain} alt='family' />
            </div>

            <div className='text'>
                <h2>Welcome to Lilies!</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Your First Name" className='username' name='name' onChange={handleChange} required />
                    <input type="email" placeholder="Your email address" className='signup-email' name='email' onChange={handleChange} required />
                    <input type="password" placeholder="Your Password" onChange={handleChange} name='password' className='password' required />
                    <Button className='signup-btn' text={'SIGN UP'}/>
                    <p>Already have an account. <Link to='/login'>Login</Link></p>
                </form>
                
            </div>
    </div>
  )
}

export default Register