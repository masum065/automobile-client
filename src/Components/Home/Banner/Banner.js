import React, { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { SearchContext } from '../../../App';
import bannerImage from '../../../images/banner.png';
import './Banner.scss';

const Banner = () => {
  const [search, setSearch] = useContext(SearchContext);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <section className='banner'>
      <Container>
        <Row>
          <Col lg={6}>
            <div className='banner-content'>
              <h1>Find Your Dream Car</h1>
              <h3>Start online, collect safely in store.</h3>

              <div className='search-box'>
                <input
                  type='text'
                  onBlur={handleSearch}
                  placeholder='Enter Keyword'
                />
                <input type='submit' onClick={handleSubmit} value='Search' />
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <img src={bannerImage} alt='BannerImage' className='banner-image' />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
