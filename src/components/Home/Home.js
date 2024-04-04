// src/components/Home.js
import React from 'react';
import './Home.css'

function Home() {
  return (
    <>
      <section className='home'>
       <div id='home' >
        <p className='welcome'>Welcome to our restaurant!</p>
       </div>
      </section>
      <section id='reviews'>
        <p>Customer reviews</p>
      </section>
    </>
  );
}

export default Home;
