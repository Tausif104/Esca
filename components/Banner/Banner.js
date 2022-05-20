import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link'
import BannerDashboard from './banner-thumb.png'

const Banner = () => {
  return (
    <section className='banner-section'>
      <Container>
        <Row className='align-items-center'>
          <Col lg={5}>
            <div className='banner-text' data-aos='fade-right'>
              <h1>
                We Give <br /> <span>Cash Back</span>
              </h1>
              <p>A decentralised finance system helping food business owners increase profits and customer loyalty</p>
              <div className='banner-btns'>
                <a className='primary-btn' href='#'>
                  Join the wait list
                </a>
                <a className='primary-btn bordered-btn' href='#'>
                  Get a Demo
                </a>
              </div>
            </div>
          </Col>
          <Col lg={7}>
            <div className='banner-card' data-aos='fade-left'>
              <img className='img-fluid' src={BannerDashboard.src} alt='banner-card.gif' />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Banner
