import React from 'react';
import './ProductCard.scss';
import { Link } from 'react-router-dom';

const ProductCard = (props) => {
  const {
    name,
    model,
    priceFrom,
    priceTotal,
    brandName,
    image,
    _id,
  } = props.product;
  return (
    <>
      <Link to={`/car/details/${_id}`} className='product-card'>
        <div className='product-image'>
          <img src={`data:image/png;base64,${image.img}`} alt='' />
        </div>

        <div className='product-details'>
          <h3>{name}</h3>

          <p className='year'>{model}</p>
          <p className='price'>
            from <span>${priceFrom}</span> monthly or <span>${priceTotal}</span>
          </p>
          <p className='brand-name'>{brandName}</p>
        </div>
      </Link>
    </>
  );
};

export default ProductCard;
