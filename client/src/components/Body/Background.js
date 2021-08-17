import React from 'react';
import '../../App.css';
import { OrderNow } from './OrderNow';
import './Background.css';

function Background() {
  return (
    <div className='hero-container'>
      <video src='/videos/Milk_Tea_ad.mp4' autoPlay loop muted />
      <h1>SWEET TIME</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <OrderNow
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          ORDER NOW
        </OrderNow>
      </div>
    </div>
  );
}

export default Background;