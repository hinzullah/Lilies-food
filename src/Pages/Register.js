import React, { useState } from 'react'
import plantain from '../Assets/Group 14.png'
import Button from '../Components/Button'
import { Link } from 'react-router-dom'
import '../Components/Register.css'


const Register = () => {
  const [form, setform] = useState({
    name: '',
    email: '',
    password: ''
  })

  const handleChange =(e) =>{
    setform({
      ...form,
      [e.target.name]: e.target.value
    })
  }
  console.log(form)

  const handleSubmit= (e)=>{
    e.preventDefault()
    sessionStorage.setItem('data', JSON.stringify(form))
  }
  return (
    <div>
         
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