import React from 'react';
import Header from '../../Header/Header/Header';
import Footer from '../../Footer/Footer';

const MasterComponent = (props) => {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
};

export default MasterComponent;
