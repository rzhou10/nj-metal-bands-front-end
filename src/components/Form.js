import { useDispatch } from 'react-redux';
import { toggleMain } from '../features/switch';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useState } from 'react';

const submit = async (band) => {
  //
}

function Forms() {
  const [bandName, setBandName] = useState('');
  const [yearFormation, setYearFormation] = useState(0);
  const [genre, setGenre] = useState('');
  const [city, setCity] = useState('');
  const dispatch = useDispatch();

  return (
    <div style={{ width: '25%', marginLeft: 'auto', marginRight: 'auto' }} className="">
      <h1 style={{marginTop: '30px', textAlign: 'center'}}>Add a new band</h1>
      <Form style={{ marginTop: '30px', marginBottom: '50px' }}>
        <Form.Label>Band Name:</Form.Label>
        <Form.Control defaultValue={bandName}
          onBlur={(e) => {
            e.preventDefault();
            setBandName(e.target.value);
          }} />
        <Form.Label>Year Formed:</Form.Label>
        <Form.Control type={'number'} defaultValue={yearFormation}
          onBlur={(e) => {
            e.preventDefault();
            setYearFormation(e.target.value);
          }} />
        <Form.Label>Genre:</Form.Label>
        <Form.Control defaultValue={genre}
          onBlur={(e) => {
            e.preventDefault();
            setGenre(e.target.value);
          }} />
        <Form.Label>Band Name:</Form.Label>
        <Form.Control defaultValue={city}
          onBlur={(e) => {
            e.preventDefault();
            setCity(e.target.value);
          }} />
      </Form>
      <Row className='d-flex'>
        <Col>
          <Button onClick={(e) => {
            e.preventDefault();
            submit().then(() => {
              dispatch(toggleMain(true));
            })
          }}>Submit</Button>
        </Col>
        <Col>
          <div>
            <Button onClick={(e) => {
              e.preventDefault();
              submit().then(() => {
                dispatch(toggleMain(true));
              })
            }}>Back</Button>

          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Forms;
