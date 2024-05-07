import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleMain } from '../features/switch';
import axios from 'axios';
import BandCard from './BandCard';
import { Button, Form } from 'react-bootstrap';

function Bands() {
  const [sortOrder, setSortOrder] = useState('band_name');
  const [bands, setBands] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    axios({
      url: `${process.env.REACT_APP_BACKEND_URL}fetch-bands/${sortOrder}`,
      method: 'GET',
      data: { sortOrder: sortOrder }
    }).then((result) => {
      setBands(result.data);
    }).catch((e) => {
      console.log(e.message);
    })
  }, [sortOrder]);

  return (
    <div style={{ width: '70%', marginLeft: 'auto', marginRight: 'auto', marginBottom: '30px', marginTop: '30px' }}>
      <div className='d-flex justify-content-between'>
        <div className='d-flex'>

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
        </div>

        <div sm={6} className='d-flex'>
          <span style={{ marginTop: 'auto', marginBottom: 'auto', marginRight: '5px' }}>
            Have a band to add?
          </span>
          <Button onClick={(e) => {
            e.preventDefault();
            dispatch(toggleMain(false));
          }}>Add Band</Button>
        </div>
      </div>
      <div className={'d-flex flex-wrap gap-4 justify-content-center'} style={{marginTop: '50px'}}>
        {bands.map((b, index) => <BandCard band={b} key={index}/>)}
      </div>
    </div>
  );
}

export default Bands;
