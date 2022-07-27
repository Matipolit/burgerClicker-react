import React, {useState, createContext} from 'react'


export const DataContext = createContext();
export const DataProvider = (props) => {
    var items = require("./assets/shopItems.json");
    items.bpc = items.bpc.map( (item) => {
        item.amount = 0;
        return item;
    })
    const [burgers, setBurgers] = useState(0);
    const [ storeItems, setStoreItems ] = useState(items);

    return (
        <DataContext.Provider value = {[burgers, setBurgers, storeItems, setStoreItems]}>
            {props.children}
        </DataContext.Provider>
    )
}


