import ShopItem from "./shop/ShopItem";
import "../styles/Shop.css";

function Shop({ burgers, setBurgers, storeItems, setStoreItems, adjustBpc }) {
    const buyItem = (item, index, incrType) => {
        if (burgers >= item.price) {
            setBurgers(burgers - item.price);
            if(incrType == "bpc"){
                console.log("bought bpc item");
                setStoreItems((oldItems) => ({
                    bpc: oldItems.bpc.map((item) =>
                        item.index === index
                            ? {
                                  ...item,
                                  amount: item.amount + 1,
                                  price: Math.round(item.price * 1.2),
                              }
                            : item
                    ), bps: oldItems.bps
                }));
            } else if(incrType == "bps") {
                console.log("bought bps item");
                 setStoreItems((oldItems) => ({
                    bpc: oldItems.bpc,
                    bps: oldItems.bps.map((item) =>
                        item.index === index
                            ? {
                                  ...item,
                                  amount: item.amount + 1,
                                  price: Math.round(item.price * 1.2),
                              }
                        : item
                    ),
                }));
            }
        } else {
            alert("Not enough 🍔!");
        }
    };

    return (
        <div className="shopItemsContainer">
            <div className="shopItems thickBorder">
                {storeItems.bps.map((item, index) => {
                    return (
                        <div key={index}>
                            <ShopItem
                                name={item.name}
                                price={item.price}
                                increase={item.increase}
                                increaseType="bps"
                                amount={item.amount}
                                buyItem={() => buyItem(item, item.index, "bps")}
                            />
                            {index != storeItems.bps.length - 1 && (
                                <div className="horizontalItemSplitter" />
                            )}
                        </div>
                    );
                })}
            </div>
            <div className="shopItems thickBorder">
                {storeItems.bpc.map((item, index) => {
                    return (
                        <div key={item.index}>
                            <ShopItem
                                name={item.name}
                                price={item.price}
                                increase={item.increase}
                                increaseType="bpc"
                                amount={item.amount}
                                buyItem={() => buyItem(item, item.index, "bpc")}
                            />
                            {index != storeItems.bpc.length - 1 && (
                                <div className="horizontalItemSplitter" />
                            )}
                        </div>
                    );
                })}
             </div>
        </div>
    );
}

export default Shop;
