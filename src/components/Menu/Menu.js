  import React from 'react';
  import './Menu.css';
  import Card from './card'; // Ensure correct import path for Card component
  import data from './Menu-Api'; // Ensure correct import path for data

  function Menu() {
    return (
      <section>
        <div className='menu_d' id='menu'>
          <div>
            <h2>Menu</h2>
          </div>
          <div>
            <p>Our delicious menu...</p>
          </div>
        </div>
        <div className='menu_container'>
          {data.map((val, index) => {
            return (
              <div key={index} className='menu_item'>
              <Card
                price={val.price}
                title={val.title}
                desc={val.desc}
                
              />
              </div>
            );
          })}
        </div>
      </section>
    );
  }

  export default Menu;
