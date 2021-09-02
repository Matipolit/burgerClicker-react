import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, useLocation } from 'react-router-dom';
import burgerImage from './assets/burger.png'

import logo from './logo.svg';
import './App.css';

import Shop from './components/Shop';

function App() {
  //let location = useLocation();
  const [burgers, setBurgers] = useState(0)

  const burgerClick = () => {
    setBurgers(burgers+1)
  }


  return (
    <Router>

      <div className="App">
        <Route path='/' exact render = {() => (
          <>
              <h1>{burgers}</h1>
              <img src={burgerImage} className="Main-burger" alt="burger"
              onClick={() => burgerClick()} />
          </>
        )} />
        <Route path='/shop' component={Shop} />
         {/* {location.pathname === '/' &&( */}
          <p><Link to='/shop'>go to shop</Link></p>
        {/* //)} */}


      </div>

    </Router>
  );
}

export default App;
