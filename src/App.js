import './App.css';
import { useSelector } from 'react-redux';
import Bands from './components/Bands';
import Forms from './components/Form';

function App() {
  const showMain = useSelector(state => state.switchPage.value);

  return showMain ? <Bands /> : <Forms />;
}

export default App;
