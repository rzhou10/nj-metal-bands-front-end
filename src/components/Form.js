import { useDispatch } from 'react-redux';
import { toggleMain } from '../features/switch';

const submit = async () => {
  //
}

function Forms() {
  const dispatch = useDispatch();

  return (
    <div className="App">
      <div>
        <button onClick={(e) => {
          e.preventDefault();
          submit().then(() => {
            dispatch(toggleMain(true));
          })
        }}>Submit</button>
      </div>
      <div>
        <button onClick={(e) => {
          e.preventDefault();
          submit().then(() => {
            dispatch(toggleMain(true));
          })
        }}>Back</button>

      </div>
    </div>
  );
}

export default Forms;
