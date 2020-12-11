import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import MainButton from '../Shared/MainButton/MainButton';
import MasterComponent from '../Shared/MasterComponent/MasterComponent';
import './AddCar.scss';

const AddCar = () => {
  let history = useHistory();
  const [addCar, setAddCar] = useState({});
  const [file, setFile] = useState({});

  const handleBlur = (e) => {
    const newCar = { ...addCar };
    newCar[e.target.name] = e.target.value;
    setAddCar(newCar);
  };

  const handleFileChange = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
  };

  const handleSubmit = (e) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('name', addCar.name);
    formData.append('model', addCar.model);
    formData.append('priceTotal', addCar.priceTotal);
    formData.append('priceFrom', addCar.priceFrom);
    formData.append('brandName', addCar.brandName);

    fetch('https://enigmatic-eyrie-95405.herokuapp.com/addCar', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          history.push('/car/detail');
        }
      })
      .catch((error) => {
        console.error(error);
      });

    e.preventDefault();
  };

  return (
    <MasterComponent>
      <Container>
        <Row className='justify-content-center'>
          <Col lg={8}>
            <div className='add-car-form'>
              <h3 className='title'>Add a new Car</h3>
              <form onSubmit={handleSubmit}>
                <Row>
                  <Col lg={6}>
                    <div className='form-input'>
                      <label htmlFor='title'>Car Name</label>
                      <input
                        type='text'
                        onBlur={handleBlur}
                        name='name'
                        placeholder='Enter Car Name'
                      />
                    </div>
                  </Col>
                  <Col lg={6}>
                    <div className='form-input'>
                      <label htmlFor='model'>Model Name</label>
                      <input
                        type='text'
                        onBlur={handleBlur}
                        name='model'
                        placeholder='Model & Year'
                      />
                    </div>
                  </Col>
                  <Col lg={6}>
                    <div className='form-input'>
                      <label htmlFor='priceTotal'>Total Price</label>
                      <input
                        type='number'
                        onBlur={handleBlur}
                        name='priceTotal'
                        placeholder='Enter Total Price'
                      />
                    </div>
                  </Col>
                  <Col lg={6}>
                    <div className='form-input'>
                      <label htmlFor='priceFrom'>Installment Amount</label>
                      <input
                        type='number'
                        onBlur={handleBlur}
                        name='priceFrom'
                        placeholder='Enter Installment Amount'
                      />
                    </div>
                  </Col>
                  <Col lg={6}>
                    <div className='form-input'>
                      <label htmlFor='brandName'>Brand Name</label>
                      <input
                        type='text'
                        onBlur={handleBlur}
                        name='brandName'
                        placeholder='Enter Brand Name'
                      />
                    </div>
                  </Col>
                  <Col lg={6}>
                    <div className='file-field'>
                      <label htmlFor='file'>
                        <span>Upload Image</span>
                      </label>
                      <input
                        type='file'
                        onChange={handleFileChange}
                        id='file'
                        name='file'
                      />
                    </div>
                  </Col>
                  <Col lg={12}>
                    <Row className='mt-1'>
                      <Col lg={3}>
                        <MainButton>Add</MainButton>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </MasterComponent>
  );
};

export default AddCar;
