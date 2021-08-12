import React from 'react';
import '../App.css';

function About() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <div className='about-container'>
          {/* <video src='/videos/Milk Tea ad.mp4' autoPlay loop muted /> */}
          <h1>ABOUT US</h1>
          <p>Our drinks are made from high quality tea leaves and selected ingredients shipped directly </p>
          <p>from Taiwan. All products are 100% guaranteed to arrive fresh and tasty. We test </p>
          <p>the tea leaves each growing season and all ingredients from time to time </p>
          <p>to ensure our drinks’ consistent and quality. Best tea needs the</p>
          <p>best ingredients and we insist on the best for you!</p>
        </div>
      </div>
    </div>
  );
}

export default About;