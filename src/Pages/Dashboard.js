import React from 'react'
import mylogo from '../Assets/logo1.png'
import '../Components/Dashboard.css'
import { FaHome , FaUser, FaBookmark, FaTruck} from 'react-icons/fa';
import myfood1 from '../Assets/food1.png'
import spaghetti from '../Assets/spag.png'
import samo from '../Assets/samosa.png'
import burg from '../Assets/burger.png'
import fries from '../Assets/Group 14.png'
import profile from '../Assets/avatar.png'
import Sidebar from '../Components/Sidebar';

const Dashboard = () => {
  let user =JSON.parse(sessionStorage.getItem('user'))
  console.log(user)
  return (
    
    <div className='dashboard'>
        <div>
        <div className='header'>
            <img src={profile} alt='' className='profile'/>
            <h1><img src={mylogo} alt='my logo' />Lilies</h1>
            <h2>{`Good Afternoon ${user.name}`}</h2>
            <p>What delicious meal are you craving for today?</p>
        </div>
        
        <div className='side-nav'>
          <ul>
            <li className='bar1'><FaHome />Dashboard</li>
            <li className='bar2'><FaUser />Your Profile</li>
            <li className='bar3'><FaBookmark />Orders</li>
            <li className='bar4'><FaTruck />Your Cart</li>
          </ul>
        </div>
      </div>
      <Sidebar />
        <div className='food-menu'>
            <div>
              <img src={burg}  alt=''/>
              <h2>Stir Fry Pasta</h2>
              <p>The in-house pasta and chicken by chef Moose</p>
            </div>
            <div>
              <img src={spaghetti}  alt=''/>
              <h2>Stir Fry Pasta</h2>
              <p>The in-house pasta and chicken by chef Moose</p>
            </div>
            <div>
              <img src={samo}  alt=''/>
              <h2>Stir Fry Pasta</h2>
              <p>The in-house pasta and chicken by chef Moose</p>
            </div>
            <div>
              <img src={myfood1}  alt=''/>
              <h2>Stir Fry Pasta</h2>
              <p>The in-house pasta and chicken by chef Moose</p>
            </div>
            <div>
              <img src={fries}  alt=''/>
              <h2>Stir Fry Pasta</h2>
              <p>The in-house pasta and chicken by chef Moose</p>
            </div>
            <div>
              <img src={burg}  alt=''/>
              <h2>Stir Fry Pasta</h2>
              <p>The in-house pasta and chicken by chef Moose</p>
            </div>
              
              
              
        </div>
    </div>
  )
}

export default Dashboard