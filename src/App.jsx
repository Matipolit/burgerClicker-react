import "./App.css";
import { useState, useEffect } from "react";
import Home from "./components/Home";
import Shop from "./components/Shop";
import BurgerAmount from "./components/BurgerAmount";
import { ShopData } from "./components/shop/ShopData";
import { useInterval } from "./lib/useInterval";


function App() {
    var items = ShopData;
    items.bpc = items.bpc.map((item) => {
        item.amount = 0;
        return item;
    });
    
    items.bps = items.bps.map((item) => {
        item.amount = 0;
        return item;
    });
    const [burgers, setBurgers] = useState(0);
    const [storeItems, setStoreItems] = useState(items);
    const [bpc, setBpc] = useState(1);
    const [bps, setBps] = useState(0);
    const [atHome, setAtHome] = useState(true);

    useEffect(() => {
        adjustBpc();
        adjustBps();
    }, [storeItems]);
    
    useInterval(()=>{
        setBurgers(burgers+bps);
    }, 1000);

    function adjustBpc() {
        console.log("Adjusting BPC");
        let increase = 1;
        storeItems.bpc.forEach((item) => {
            increase += item.increase * item.amount;
        });
        console.log("Increase: " + increase.toString());
        setBpc(increase);
    }

    function adjustBps() {
        console.log("Adjusting BPS");
        let increase = 0;
        storeItems.bps.forEach((item) => {
            increase += item.increase * item.amount;
        });
        console.log("Increase: " + increase.toString());
        setBps(increase);
    }

    return (
        <div className="bigDiv centerText">
            <BurgerAmount burgers={burgers} bpc={bpc} bps={bps} />
            {atHome ? (
                <Home burgers={burgers} setBurgers={setBurgers} bpc={bpc} />
            ) : (
                <Shop
                    burgers={burgers}
                    setBurgers={setBurgers}
                    storeItems={storeItems}
                    setStoreItems={setStoreItems}
                    adjustBpc={adjustBpc}
                />
            )}
            <button
                className="nav"
                onClick={() => {
                    setAtHome(!atHome);
                }}
            >
                {atHome ? "🛒 Go to the Shop" : "Go back"}
            </button>
        </div>
    );
}

export default App;
