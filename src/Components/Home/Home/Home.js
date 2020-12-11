import React from 'react';
// import MasterComponent from '../../MasterComponent/MasterComponent';
import Products from '../../Products/Products/Products';
import MasterComponent from '../../Shared/MasterComponent/MasterComponent';
import Banner from '../Banner/Banner';

const Home = () => {
  return (
    <MasterComponent>
      <Banner />
      <Products />
    </MasterComponent>
  );
};

export default Home;
