import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleMain } from '../features/switch';
import axios from 'axios';
import BandCard from './BandCard';
import { Button, Col, Form, Row } from 'react-bootstrap';

function Bands() {
  const [sortOrder, setSortOrder] = useState('band_name');
  const [bands, setBands] = useState([{ band_name: 'Overkill', year_formation: 1, genre: 'Thrash Metal', city: "Old Bridge" }]);
  const showMain = useSelector(state => state.switchPage.value);
  const dispatch = useDispatch();

  useEffect(() => {
    // axios("http://localhost:8080/fetch-bands", {
    //   method: 'GET',
    //   data: { sortOrder: sortOrder }
    // }).then((result) => {
    //   setBands(result);
    // }).catch((e) => {
    //   console.log(e.message);
    // })
  }, [sortOrder]);

  return (
    <div style={{ width: '50%', marginLeft: 'auto', marginRight: 'auto', marginBottom: '30px', marginTop: '30px' }}>
      <Row>
        <Col sm={6} className='d-flex'>

          <span style={{ marginTop: 'auto', marginBottom: 'auto', marginRight: '5px' }}>
            Sort:
          </span>
          <Form.Select onChange={(e) => {
            setSortOrder(e.target.value);
          }}>
            <option value={'band_name'}>Name</option>
            <option value={'year_formation'}>Year of Formation</option>
            <option value={'city'}>City</option>
          </Form.Select>
        </Col>

        <Col sm={6}>
          <span style={{ marginTop: 'auto', marginBottom: 'auto', marginRight: '5px' }}>
            Have a band to add?
          </span>
          <Button onClick={(e) => {
            e.preventDefault();
            dispatch(toggleMain(false));
          }}>Add Band</Button>
        </Col>
      </Row>
      <div style={{display: 'grid', marginTop: '50px'}}>
        {bands.map((b, index) => <BandCard band={b} key={index}/>)}
      </div>
    </div>
  );
}

export default Bands;
