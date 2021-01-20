import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cardcard() {
  return (
    <div className='cards'>
      <h1>Check out our best dishes and snacks</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/jollof.jpg'
              text='jollof is a tpical ghanaian dish in Ghana made from rice and tomato sauce.'
              label='Jollof'
              path='/services'
            />
             <CardItem
              src='images/potbellyfood.jpg'
              text='junk food available in potbellyshack'
              label='pottbellyShack'
              path='/services'
            />
           
          </ul>
          <ul className='cards__items'>
           
            <CardItem
              src='images/crabUrban grill.jpg'
              text='Delicious grilled crab from Urbangrill'
              label='Crab' 
              path='/products'
            />

              <CardItem
              src='images/yam.jpg'
              text='this looks perfect for a perfect lunch'
              label='Yam Chips' 
              path='/products'
            /> 
            <CardItem
              src='images/sushi.jpg'
              text='You can get hot sushi from sankoto restuarant'
              label='sushi'
              path='/sign-up'
            />

          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/maize.jpg'
              text='Ghanaina snacks, roasted corn'
              label='Fun'
              path='/services'
            />
            <CardItem
              src='images/banku.jpg'
              text='Everybody loves banku and pepper.'
              label='Banku and pepper with grilled tilapia' 
              path='/products'
            />
            <CardItem
              src='images/bofrot.jpg'
              text='The litlle things make mornings in Accra interesting. Everyone loves brofot served hot.'
              label='Bofrot'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cardcard;
