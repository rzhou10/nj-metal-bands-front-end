import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleMain } from '../features/switch';
import axios from 'axios';

function Bands() {
  const [sortOrder, setSortOrder] = useState('band_name');
  const [bands, setBands] = useState([]);
  const showMain = useSelector(state => state.switchPage.value);
  const dispatch = useDispatch();
  useEffect(() => {
    axios("http://localhost:8080/fetch-bands", {
      method: 'GET',
      data: { sortOrder: sortOrder }
    }).then((result) => {
      setBands(result);
    }).catch((e) => {
      console.log(e.message);
    })
  }, [sortOrder]);

  if (!showMain) {

    return (
      <div className="App">
        <div>
          Have a band to add?

        </div>
      </div>
    );

  }

  return (
    <div className="App">
      <div>
        Sort: <select onChange={(e) => {
          setSortOrder(e.target.value);
        }}>
          <option value={'band_name'}>Name</option>
          <option value={'year_formation'}>Year of Formation</option>
          <option value={'city'}>City</option>
        </select>
      </div>
      <div>
        Have a band to add?
        <button onClick={(e) => {
          e.preventDefault();
          dispatch(toggleMain(false));
        }}>Add Band</button>
      </div>
    </div>
  );
}

export default Bands;
