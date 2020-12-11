import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom';
import './ProductDetailsCard.scss';

const ProductDetailsCard = () => {
  let { carId } = useParams();

  const [image, setImage] = useState('');
  const [cars, setCars] = useState([]);
  let history = useHistory();

  useEffect(() => {
    if (!carId) {
      fetch('https://enigmatic-eyrie-95405.herokuapp.com/latestCar')
        .then((response) => response.json())
        .then((data) => {
          setCars(data);
          setImage(data.image.img);
        });
    } else {
      fetch(`https://enigmatic-eyrie-95405.herokuapp.com/cars/${carId}`)
        .then((res) => res.json())
        .then((data) => {
          setCars(data);
          setImage(data.image.img);
        });
    }
  }, [carId]);

  const handleDelete = (id) => {
    fetch(`https://enigmatic-eyrie-95405.herokuapp.com/deleteProduct/${id}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((data) => {
        history.push(`/`);
      });
  };

  const loading = (
    <p style={{ textAlign: 'center', fontWeight: 'bold', padding: '15px' }}>
      loading...
    </p>
  );
  return (
    <Container className='product-details-card'>
      {cars.length === 0 ? (
        loading
      ) : (
        <Row>
          <Col lg={12}>
            <div className='details-image'>
              <img src={`data:image/png;base64,${image}`} alt='' />
            </div>
          </Col>
          <Col lg={12}>
            <div className='product-details-info'>
              <h3 className='title'>Car Details</h3>

              <div className='product-details-header'>
                {!carId && (
                  <div className='update-btn'>
                    <span
                      onClick={() => history.push(`/cars/update/${cars._id}`)}
                      className='edit'
                    >
                      Edit
                    </span>
                    <span onClick={() => handleDelete(cars._id)}>Delete</span>
                  </div>
                )}
                <h4 className='name'>{cars.name}</h4>
                <p className='price'>
                  <span>${cars.priceTotal}</span> or from{' '}
                  <span>${cars.priceFrom}</span>
                  monthly
                </p>
                <p className='model'>
                  <span>Model:</span>
                  {cars.model}
                </p>
                <p className='brand model'>
                  <span>Brand:</span>
                  {cars.brandName}
                </p>
                <p className='descriptor'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                  vitae nam eaque fugit voluptates magnam dicta iste numquam.
                  Porro, adipisci. Rerum quis corrupti quasi provident ab itaque
                  beatae possimus voluptatibus corporis nulla? <br />
                  <br /> Soluta necessitatibus deserunt vero rerum, culpa optio,
                  voluptatum iusto ullam illo consequuntur nulla sit ab,
                  excepturi quibusdam doloribus error. Amet sapiente ratione
                  suscipit minus molestias, inventore ea minima modi sequi odit
                  quos porro voluptas. <br />
                  <br /> Temporibus voluptatum pariatur hic recusandae, velit
                  debitis omnis reiciendis. Autem harum voluptas, veniam quasi
                  aperiam praesentium nam ipsum et itaque, placeat sit quam
                  obcaecati sint soluta, eius tempore minus quas illo nesciunt
                  esse dolorem!
                </p>
              </div>
            </div>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default ProductDetailsCard;
