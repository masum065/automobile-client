import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import logo from '../../../images/logo.png';
import MainButton from '../../Shared/MainButton/MainButton';
import Menu from '../Menu/Menu';
import './Header.scss';

const Header = () => {
  let history = useHistory();

  return (
    <section className='header'>
      <Container>
        <Row>
          <Col lg={2}>
            <Link to='/' className='logo'>
              <img src={logo} alt='logo' />
            </Link>
          </Col>
          <Col lg={8}>
            <Menu />
          </Col>
          <Col lg={2}>
            <div className='header-btn'>
              <MainButton onClick={() => history.push('/addCar')}>
                Add Car
              </MainButton>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Header;
