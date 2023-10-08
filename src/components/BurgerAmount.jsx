import "../styles/BurgerAmount.css";

function BurgerAmount({ burgers, bpc, bps }) {
    return (
        <div>
            <h1 className="burgerAmount">{burgers} 🍔</h1>
            <p>🍔 per click: {bpc}</p>
            <p>🍔 per sec: {bps}</p>
        </div>
    );
}

export default BurgerAmount;
