import React from 'react';
import MasterComponent from '../../Shared/MasterComponent/MasterComponent';
import ProductDetailsCard from '../ProductDetailsCard/ProductDetailsCard';
import './ProductDetails.scss';

const ProductDetails = () => {
  return (
    <MasterComponent>
      <ProductDetailsCard />
    </MasterComponent>
  );
};

export default ProductDetails;
