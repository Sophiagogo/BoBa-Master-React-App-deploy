import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Enjoy your food!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img3.png'
              text='Mind opening tea not Today,Everyday'
              label='Drinks'
              path='/allproducts'
            />
            <CardItem
              src='images/img11.png'
              text='Have the syrup on the ready!'
              label='Foods'
              path='/allproducts'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img2.png'
              text='Love every moments with tea'
              label='Drinks'
              path='/allproducts'
            />
            <CardItem
              src='images/img14.png'
              text='Crisp golden waffles today!'
              label='Foods'
              path='/allproducts'
            />
            <CardItem
              src='images/img7.png'
              text='Even chickens recommend us.'
              label='Foods'
              path='/allproducts'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;