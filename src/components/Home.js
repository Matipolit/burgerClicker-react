import { useContext } from 'react';
import { Link } from 'react-router-dom';
import BurgerAmount from './BurgerAmount'
import burgerImage from '../assets/burger.png';
import { DataContext } from '../DataContext';
import "../styles/Home.css"

function Home(){

    const [burgers, setBurgers, storeItems] = useContext(DataContext);
    
    function getBurgerIncrease(){
      let increase = 1;
      storeItems.bpc.forEach( (item) => {
        increase+=(item.bpc*item.amount);
      })
      return increase;
    }

    function burgerClick(){
      setBurgers(burgers+getBurgerIncrease());
    }

    return (
      <div className="bigDiv centerText">
          <BurgerAmount burgers={burgers} />
          <img src={burgerImage} className="Main-burger" alt="burger"
            onClick={() => burgerClick()} />
        <p className="atBottomDiv"><Link className="link" to='/shop'>🛒 Go to the Shop</Link></p>
      </div>

    );

}

export default Home; 
