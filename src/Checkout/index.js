import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom'
import {
  Container,
  Row,
  Col,
  Form,
  Button
} from 'react-bootstrap'

import './styles.css'

const COUNTRIES = [
  'Barranquilla',
  'Valledupar',
  'Santa Marta',
  'Cartagena',
  'Tolima'
]

function CheckOut (props) {

  const product = props.history.location.state;

  const history = useHistory();

  function orderCheckoutHandler(product) {
    
    history.push("/OrderSumary", product);
    
  }

  const { register, handleSubmit } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      town: '',
      zipcode: '',
      'newsletter': '',
      'terms-and-conditions': ''
    }
  })
  return (
    <form className='checkout' onSubmit={ orderCheckoutHandler( product )}>
      <Container className='border mt-5'>
        <Row>
          <Col xs={6}>
            <Form.Group>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type='text'
                name='firstname'
                ref={register}
              />
            </Form.Group>
          </Col>
          <Col xs={6}>
            <Form.Group>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type='text'
                name='lastname'
                ref={register}
              />
            </Form.Group>
          </Col>
          <Col xs={6}>
            <Form.Group>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type='email'
                name='email'
                ref={register}
              />
            </Form.Group>
          </Col>
          <Col xs={6}>
            <Form.Group>
              <Form.Label>Phone number</Form.Label>
              <Form.Control
                type='text'
                name='phone'
                ref={register}
              />
            </Form.Group>
          </Col>
          <Col xs={6}>
            <Form.Group>
              <Form.Label>Address</Form.Label>
              <Form.Control
                type='text'
                name='address'
                ref={register}
              />
            </Form.Group>
          </Col>
          <Col xs={6}>
            <Form.Group>
              <Form.Label>Town / City</Form.Label>
              <Form.Control
                type='text'
                name='town'
                ref={register}
              />
            </Form.Group>
          </Col>
          <Col xs={6}>
            <Form.Label>Town / City</Form.Label>
            <Form.Control as='select' name='country' ref={register}>
              {
                COUNTRIES.map((country, i) => (
                  <option key={i}>{country}</option>
                ))
              }
            </Form.Control>
          </Col>
          <Col xs={6}>
            <Form.Group>
              <Form.Label>ZIP / Postal code</Form.Label>
              <Form.Control
                type='text'
                name='zipcode'
                ref={register}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Form.Group>
              <Form.Label>Card number</Form.Label>
              <Form.Control
                type='text'
                name='card-number'
              />
            </Form.Group>
          </Col>
          <Col xs={8}>
            <Form.Group>
              <Form.Label >Card holder</Form.Label>
              <Form.Control
                type='text'
                name='card-holder'
              />
            </Form.Group>
          </Col>
          <Col xs={2}>
            <Form.Group>
              <Form.Label >Expiration date</Form.Label>
              <Form.Control
                type='text'
                name='expiration'
              />
            </Form.Group>
          </Col>
          <Col xs={2}>
            <Form.Group>
              <Form.Label >CVC</Form.Label>
              <Form.Control
                type='text'
                name='cvc'
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Button as="input" type="submit" value="Submit" />
          </Col>
        </Row>
      </Container>
    </form>
  )
}
export default CheckOut
