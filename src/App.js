import './App.css';
import { Reset } from 'styled-reset'
import logo from './image/logo.png';

function App() {
  return (
    <div>
      <Reset />
      <header className='header'>
        <div className='headerTop'>
          <ul className='myMenu'>
            <li className='myMenu-margin'>Login</li>
            <li className='myMenu-margin'>Join</li>
            <li>Cart</li>
          </ul>
        </div>
        <div>
          <img src={logo} alt="#" className='logo'></img>
        </div>
      </header>
      <div>

      </div>
    </div>
  );
}

export default App;
