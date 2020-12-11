import React, { useContext, useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { SearchContext } from '../../../App';
import ProductCard from '../ProductCard/ProductCard';
import Sidebar from '../Sidebar/Sidebar';
import './Products.scss';

const Products = () => {
  const [cars, setCars] = useState([]);
  const [search, setSearch] = useContext(SearchContext);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`https://enigmatic-eyrie-95405.herokuapp.com/cars?search=${search}`)
      .then((res) => res.json())
      .then((data) => {
        setCars(data);
        setLoading(false);
      });
  }, [search]);

  const loadingSpinner = (
    <p style={{ textAlign: 'center', fontWeight: 'bold', padding: '15px' }}>
      loading...
    </p>
  );
  const noDAta = (
    <p style={{ textAlign: 'center', fontWeight: 'bold', padding: '15px' }}>
      No Car found
    </p>
  );
  return (
    <Container className='my-3'>
      <Row>
        <Col lg={4}>
          <Sidebar />
        </Col>
        <Col lg={8}>
          <p className='meta'> We're open! Hold your car</p>
          {loading
            ? loadingSpinner
            : cars.map((car) => <ProductCard key={car._id} product={car} />)}
          {!loading && cars.length === 0 && noDAta}
        </Col>
      </Row>
    </Container>
  );
};

export default Products;
