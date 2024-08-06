import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook from React Router
import './Home.css';
import star from '../assets/5-Star.png';

function Home() {
  const navigate = useNavigate(); // Initialize the navigate function

  // Function to handle navigation to the Menu page
  const handleViewMenu = () => {
    navigate('/menu'); // Navigate to the Menu page when the button is clicked
  };

  const handleReserve = () => {
    navigate('/reserve'); // Navigate to the Reserve page when the button is clicked
  }

  return (
    <>
      <section className='home'>
        <div id='home'>
          <p className='welcome'>Welcome to our restaurant!</p>
          <div className='menu'>
            {/* Call handleViewMenu function when the button is clicked */}
            <button className='btn_menu' onClick={handleViewMenu}>VIEW MENU</button>
          </div>
        </div>
        </section>
      <section id='reviews' className='reviews'>
        <p className='review_header'>Customer reviews</p>
        <img src={star} className='star'></img>
        <p className='review-text'>100+ 5 star reviews from our customers</p>
        <p className='review'>"Exceptional burgers, vibrant flavors, and top-tier service. 
          A must-visit for a truly memorable dining experience. A must for 
          burger aficionados! Your taste buds will thank you. With exceptional service, 
          it’s more than a meal – it’s a culinary journey you won’t forget!"</p>
      </section>
      <section id='mostly_bought' className='mostly_bought'>
        <p className='meal_header'>Mostly Flavoured food</p>
        <div className='meals'>
          <div className='meal'>
            <p className='meal_text'> Starter</p>
            <p className='meal_details'>
              Summer Bliss Salad
              spinach, beetroot, goat cheese,
              walnut dressing</p>
            <p className='meal_details'>R85</p>
          </div>
          <div className='meal'>
            <p className='meal_text'>Drinks</p>
            <p className='meal_details'>
            Cocktail
            A refreshing blend of premium vodka, 
            crisp cucumber, and zesty lime, 
            topped with a splash of sparkling water.s</p>
            <p className='meal_details'>R85</p>
          </div>
          <div className='meal'>
            <p className='meal_text'>Main</p>
            <p className='meal_details'>
            Grilled T-Bone Steak
            herbed butter, 
            garlic mashed potatoes</p>
            <p className='meal_details'>R85</p>
          </div>
          
        </div>
        <button className='btn_more' onClick={handleViewMenu}>View More</button>
      </section>
      <section>
        <div className='Reserver'>
          <p>lets reserve some space</p>
        </div>
      </section>
      <section id='reserve' className='reserve_space'>
        <div className='reserve_info'>
          <p className='reserve_space_h'>Book your culinary experience now</p>
          <p className='motive'>Indulge your senses in a symphony of flavors crafted by Silver
            Fork awardee Chef Alex. Join us for a dining experience where tradition meets innovation.</p>
        </div>
        {/* Call handleReserve function when the "Reserve" button is clicked */}
        <div><button className='btn_book' onClick={handleReserve}>Reserve</button></div>
      </section>
    </>
  );
}

export default Home;
