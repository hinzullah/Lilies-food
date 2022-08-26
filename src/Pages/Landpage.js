import React from 'react'
import { Link } from 'react-router-dom'
import mylogo from '../Assets/logo1.png'
import Button from '../Components/Button'
import Content from '../Components/Content'
import Footer from '../Components/Footer'


const Landpage = () => {
  return (
    <div className='landpage'>
        <header>
            <img className='logo' src={mylogo} alt='my logo' />
            <h1>Lilies</h1>

            <ul className='navbar'>
                <Link to=''><li className='home'>Home</li></Link>
                <Link to='/login'><li className='login'>Login</li></Link>
                <Link to='/sign-up'><li className='sign-up'><Button text={'Sign Up'}/></li></Link>
            </ul>
        </header>
        
        <Content />
        <Footer />

        
    </div>
  )
}

export default Landpage