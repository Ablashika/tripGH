import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/skybar.jpg'
              text='Check out skybar here in Accra'
              label='Food'
              path='/services'
            />
            <CardItem
              src='images/kakum0004.jpg'
              text='Kakuum National Park In Elmina'
              label='Adventure'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/AquaSafari.jpg'
              text='Here in AquaSafai you can have fun with JetSki'
              label='Fun'
              path='/services'
            />
            <CardItem
              src='images/Mole-Entrance.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure' 
              path='/products'
            />
            <CardItem
              src='images/kwahu.jpg'
              text=''
              label='Adventure'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
