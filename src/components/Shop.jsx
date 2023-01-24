import { useContext } from 'react';
import { Link } from "react-router-dom"
import BurgerAmount from './BurgerAmount'
import ShopItem from "./shop/ShopItem"
import { DataContext } from '../DataContext';
import "../styles/Shop.css"


function Shop({burgers, setBurgers, storeItems, setStoreItems}){

    const buyItem = ( item, index ) => {
        if(burgers>=item.price){
            setBurgers(burgers-item.price);
            var oldItems = storeItems;
            setStoreItems(oldItems => ({
                bpc: oldItems.bpc.map(
                    item => item.index === index? { ...item, amount: item.amount+1, price: Math.round(item.price*1.2)}:item
                )
            }))
        }else{
            alert("Not enough 🍔!");
        }
    }

    return (
        <div className="shopItems thickBorder">        
            {storeItems.bpc.map((item, index)=>{
                return(
                    <div key={index}>
                        <ShopItem name={item.name} price={item.price}
                            increase={item.bpc} increaseType="bpc" amount={item.amount}
                            buyItem={() => buyItem( item, index )} />
                        { index != storeItems.bpc.length-1 &&
                            <div className="horizontalItemSplitter"/>
                        }
                    </div>
                )})}
        </div>

    )
}

export default Shop
