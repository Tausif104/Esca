import { Col, Container, Row } from 'react-bootstrap'
import FooterLogo from './logo.svg'

const Footer = () => {
  return (
    <footer className='footer-area'>
      <Container>
        <Row className='justify-content-center'>
          <Col lg={4}>
            <div className='footer-about'>
              <div className='footer-logo'>
                <img src={FooterLogo.src} alt='' />
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt sit amet massa quis laoreet. Aliquam diam lectus, egestas venenatis </p>
            </div>
          </Col>
          <Col lg={8}>
            <Row>
              <Col lg='3'>
                <div className='footer-widget'>
                  <h4 className='footer-title'>Product</h4>
                  <ul className='footer-menu'>
                    <li>
                      <a href='#'>Manage</a>
                    </li>
                    <li>
                      <a href='#'>Mobile App</a>
                    </li>
                    <li>
                      <a href='#'>FAO</a>
                    </li>
                    <li>
                      <a href='#'>Contloct</a>
                    </li>
                    <li>
                      <a href='#'>us</a>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col lg='3'>
                <div className='footer-widget'>
                  <h4 className='footer-title'>Product</h4>
                  <ul className='footer-menu'>
                    <li>
                      <a href='#'>Manage</a>
                    </li>
                    <li>
                      <a href='#'>Mobile App</a>
                    </li>
                    <li>
                      <a href='#'>FAO</a>
                    </li>
                    <li>
                      <a href='#'>Contloct</a>
                    </li>
                    <li>
                      <a href='#'>us</a>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col lg='3'>
                <div className='footer-widget'>
                  <h4 className='footer-title'>Product</h4>
                  <ul className='footer-menu'>
                    <li>
                      <a href='#'>Manage</a>
                    </li>
                    <li>
                      <a href='#'>Mobile App</a>
                    </li>
                    <li>
                      <a href='#'>FAO</a>
                    </li>
                    <li>
                      <a href='#'>Contloct</a>
                    </li>
                    <li>
                      <a href='#'>us</a>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col lg='3'>
                <div className='footer-widget'>
                  <h4 className='footer-title'>Product</h4>
                  <ul className='footer-menu'>
                    <li>
                      <a href='#'>Manage</a>
                    </li>
                    <li>
                      <a href='#'>Mobile App</a>
                    </li>
                    <li>
                      <a href='#'>FAO</a>
                    </li>
                    <li>
                      <a href='#'>Contloct</a>
                    </li>
                    <li>
                      <a href='#'>us</a>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
