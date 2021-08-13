import React from 'react';
import Cards from '../components/Body/Card';
import Background from '../components/Body/Background';



const Home = () => {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <Background />
        <Cards />
      </div>
    </div>
  );
};

export default Home;