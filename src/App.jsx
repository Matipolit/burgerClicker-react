import "./App.css";
import { useState, useEffect } from "react";
import Home from "./components/Home";
import Shop from "./components/Shop";
import BurgerAmount from "./components/BurgerAmount";
import { ShopData } from "./components/shop/ShopData";

function App() {
    var items = ShopData;
    items.bpc = items.bpc.map((item) => {
        item.amount = 0;
        return item;
    });
    const [burgers, setBurgers] = useState(0);
    const [storeItems, setStoreItems] = useState(items);
    const [bpc, setBpc] = useState(1);
    const [atHome, setAtHome] = useState(true);

    useEffect(() => {
        adjustBpc();
    }, [storeItems]);

    function adjustBpc() {
        console.log("getting increase");
        let increase = 1;
        storeItems.bpc.forEach((item) => {
            increase += item.bpc * item.amount;
        });
        console.log("Increase: " + increase.toString());
        setBpc(increase);
    }

    return (
        <div className="bigDiv centerText">
            <BurgerAmount burgers={burgers} bpc={bpc} />
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
