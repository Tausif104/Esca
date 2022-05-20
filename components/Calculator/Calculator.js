import { Col, Container, Row } from 'react-bootstrap'

const Calculator = () => {
  return (
    <section className='calculator-section'>
      <div className='calculator-desc'>
        <Container>
          <Row>
            <Col lg={6}>
              <div className='calculator-text text-center'>
                <h3>Know your customer and increase profits</h3>
                <p>Cashback, customer profiling, exposure to the digital currency market (APR 230%), and incentivised customer loyalty.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className='calculator-widget'>
        <Container>
          <Row>
            <Col>
              <iframe
                src='https://app.calconic.com/api/embed/calculator/6252010825b5a3001f0837f6'
                sandbox='allow-same-origin allow-forms allow-scripts allow-top-navigation allow-popups-to-escape-sandbox allow-popups'
                title='Calconic_ Calculator'
                name='Calconic_ Calculator'
                height='766px'
                scrolling='no'
                style={{ width: '100%' }}
              ></iframe>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  )
}

export default Calculator
