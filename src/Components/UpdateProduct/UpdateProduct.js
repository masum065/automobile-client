import React, { useState } from 'react';
import { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './UpdateProduct.scss';
import { useHistory, useLocation } from 'react-router-dom';
import MasterComponent from '../Shared/MasterComponent/MasterComponent';

const UpdateProduct = () => {
  const history = useHistory();
  const location = useLocation();
  const urlPath = location.pathname.split('/');
  const eventId = urlPath.slice(-1).pop();
  const [oldCarData, setOldCarData] = useState([]);
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    fetch(`https://enigmatic-eyrie-95405.herokuapp.com/cars/${eventId}`)
      .then((res) => res.json())
      .then((data) => setOldCarData(data));
  }, [eventId]);

  const onSubmit = (data) => {
    fetch(`https://enigmatic-eyrie-95405.herokuapp.com/update/${eventId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: data.name,
        model: data.model,
        brandName: data.brandName,
        priceFrom: data.priceFrom,
        priceTotal: data.priceTotal,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          history.push('/car/detail');
        }
      });
  };

  return (
    <MasterComponent>
      <Container className='hook-form'>
        <Row className='justify-content-center'>
          <Col lg={8}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <h3 className='title'>Update Car Informataion</h3>
              <Row>
                <Col lg={6}>
                  <div className='form-input'>
                    <label htmlFor='name'>Car Name</label>
                    <input
                      name='name'
                      defaultValue={oldCarData.name}
                      ref={register}
                      placeholder='Enter Car Name'
                    />
                  </div>
                </Col>
                <Col lg={6}>
                  <div className='form-input'>
                    <label htmlFor='model'>Model Name</label>
                    <input
                      name='model'
                      defaultValue={oldCarData.model}
                      ref={register}
                      placeholder='Model & Year'
                    />
                  </div>
                </Col>
                <Col lg={6}>
                  <div className='form-input'>
                    <label htmlFor='priceTotal'>Total Price</label>
                    <input
                      name='priceTotal'
                      defaultValue={oldCarData.priceTotal}
                      ref={register}
                      placeholder='Enter Total Price'
                    />
                  </div>
                </Col>
                <Col lg={6}>
                  <div className='form-input'>
                    <label htmlFor='priceFrom'>Installment Amount</label>
                    <input
                      name='priceFrom'
                      defaultValue={oldCarData.priceFrom}
                      ref={register}
                      placeholder='Enter Installment Amount'
                    />
                  </div>
                </Col>
                <Col lg={6}>
                  <div className='form-input'>
                    <label htmlFor='brandName'>Brand Name</label>
                    <input
                      name='brandName'
                      defaultValue={oldCarData.brandName}
                      ref={register}
                      placeholder='Enter Brand Name'
                    />
                  </div>
                </Col>

                <input type='submit' value='Update' />
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </MasterComponent>
  );
};

export default UpdateProduct;
