import { useState } from 'react';
import burgerImage from '../assets/burger.png';
import "../styles/Home.css"
import NewBurgerAnimation from './NewBurgerAnimation/NewBurgerAnimation';

function Home({burgers, setBurgers, bpc}){

  const [animations, setAnimations] = useState([])

  function burgerClick(){
    setBurgers(burgers+bpc);
  }

  return (
    <div>
      <img src={burgerImage} className="Main-burger" alt="burger"
        onClick={() => burgerClick()} />
    </div>

  );

}

export default Home; 
