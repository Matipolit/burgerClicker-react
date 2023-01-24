import "../styles/BurgerAmount.css"

function BurgerAmount({ burgers, bpc }) {
  return (
    <div>
      <h1 className="burgerAmount">{ burgers } 🍔</h1>
      <p>Burgers per click: {bpc}</p>
    </div>
  )
}

export default BurgerAmount;
