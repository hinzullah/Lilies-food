import React from 'react'
import myfood1 from '../Assets/food1.png'
import mybadge1 from '../Assets/badge1.png'
import mybadge2 from '../Assets/badge2.jpg'
import spaghetti from '../Assets/spag.png'
import samo from '../Assets/samosa.png'
import burg from '../Assets/burger.png'
import Button from './Button'

const Content = () => {
  return (
    <div>
        <div className='content'>
            <h2>Order <span>food</span> anytime, anywhere</h2>
            <p>Browse from our list of specials to place your order and have food delivered to you in no time. Affordable, tasty and fast!</p>

            <img src={myfood1} alt='indomie'/>
        </div>
        
        <img src={mybadge1} className='google' alt='g-play' />
        <img src={mybadge2} className='apple' alt='g-play' />

        <div className='center'>
            <h4>Special Meals of the day!</h4>
            <p>Check our sepecials of the day and get discounts on all our meals and swift delivery to what ever location within Ilorin.</p>

            <div className='image-1'>
                <img src={spaghetti} className='spag' alt='' />
                <h5>Stir fry Pasta</h5>
                <p>Stir fry pasta yada yada yada because of Sesan</p>
            </div>
            <div className='image-2'>
                <img src={samo} className='samo' alt=''/>
                <h5>Meat Balls</h5>
                <p>Stir fry pasta yada yada yada because of Sesan</p>
            </div>
            <div className='image-3'>
                <img src={burg} className='burg' alt= '' />
                <h5>Burger Meals</h5>
                <p>Stir fry pasta yada yada yada because of Sesan</p>
            </div>

            <div className='notice'>
                <h4>Get notified when we update!</h4>
                <p>Get notified when we add new items to our specials menu, update our price list of have promos!</p>
                <input type="email" placeholder="gregphillips@gmail.com" required />
                <Button text={'Get notified'} />
            </div>

        </div>
    </div>
  )
}

export default Content