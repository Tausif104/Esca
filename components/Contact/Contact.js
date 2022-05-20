import { Col, Container, Row } from 'react-bootstrap'
import LadyPng from './lady.png'

const Contact = () => {
  return (
    <section className='contact-us'>
      <Container>
        <Row>
          <Col lg={6}>
            <img src={LadyPng.src} alt='' />
          </Col>
          <Col lg={6}>
            <div className='contact-text'>
              <h2>Contact Us</h2>
              <Row>
                <Col md={6}>
                  <label htmlFor=''>First Name*</label>
                  <input className='form-control' type='text' placeholder='Enter your first name' />
                </Col>
                <Col md={6}>
                  <label htmlFor=''>Last Name*</label>
                  <input className='form-control' type='text' placeholder='Enter your last name' />
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <label htmlFor=''>Email address*</label>
                  <input className='form-control' type='text' placeholder='Enter email address' />
                </Col>
                <Col md={6}>
                  <label htmlFor=''>Phone*</label>
                  <input className='form-control' type='text' placeholder='Enter Phone number' />
                </Col>
                <Col md={12}>
                  <label htmlFor=''>Message*</label>
                  <textarea className='form-control' placeholder='Message'></textarea>
                  <input className='primary-btn' type='submit' value='Get In Touch' />
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Contact
