import '../../styles/shop/ShopItem.css'

const ShopItem = ({ name, price, increase, increaseType, amount, buyItem }) => {
  return (
    <div className="shopItemContainer">
      <div className="shopItemInfo">
        <button className="thinBorder" onClick={buyItem}>{name}</button>
        <p>{price} 🍔 | + {increase} {increaseType}</p>
      </div>
      <div className="verticalItemSplitter verticalSplitter"/>
      <div className="itemAmountContainer">
        <p className="itemBought">Bought:</p>
        <p className="itemAmount">{amount}</p>
        </div>

    </div>
  )
}

export default ShopItem
