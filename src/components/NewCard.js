import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cardcard() {
  return (
    <div className='cards'>
      <h1>Check out our best hotels</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            
           
          </ul>
          <ul className='cards__items'>

          <CardItem
              src='images/regent.jpg'
              text='You can relax here in one of our best hotels.'
              label='African regent Hotel'
              path='/services'
            />
        
            <CardItem
              src='images/kempiski.jpg'
              text='Kempiski hotel is one of the best hotels in Ghana'
              label='kempiski' 
              path='/products'
            />
           
              <CardItem
              src='images/sandbox.jpg'
              text='A hot sunny day at sandbox with a refreshing view.'
              label='Sandbox'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/krokobite.jpg'
              text='Still looking for a place to relax in ghana?'
              label='Krokobite hotel'
              path='/services'
            />
            <CardItem
              src='images/movenpick.jpg'
              text='You can relax here in one of our best hotels.'
              label='Movenpick Hotel'
              path='/services'
            />
              <CardItem
              src='images/december.jpg'
              text='The perfect day to lay by the pool and enjoy.'
              label='La palm beach totel'
              path='/services'
            />
             <CardItem
              src='images/quiet.jpg'
              text='You can relax here in one of our best hotels.'
              label='Krokobite Gardens'
              path='/services'
            />
            
            
            
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cardcard;
