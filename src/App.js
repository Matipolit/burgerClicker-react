import { useState, useEffect } from 'react';
import burgerImage from './assets/burger.png'
import { Link } from "react-router-dom";
import './App.css';


function App() {
  //let location = useLocation();
  const [burgers, setBurgers] = useState(0)

  const burgerClick = () => {
    setBurgers(burgers+1)
  }


  return (
      <div className="App">
          <h1>{burgers}</h1>
          <img src={burgerImage} className="Main-burger" alt="burger"
            onClick={() => burgerClick()} />
        <p><Link to='/shop'>go to shop</Link></p>
      </div>

  );
}

export default App;
