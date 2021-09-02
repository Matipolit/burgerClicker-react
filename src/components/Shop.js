import { Link } from "react-router-dom"

const Shop = () => {
    return (
        <div>
            <button onclick="Buy(1)">Assistant</button><p id="assistantPrice">60 B | +1 Bpc</p>
            <button onclick="Buy(2)">Chef</button><p id="chefPrice">800 B | +3 Bpc</p>
            <button onclick="Buy(3)">Cooking Robot</button><p id="crPrice">15000 B | +6 Bpc</p>
            <p><Link to='/'>Go back</Link></p>
        </div>
    )
}

export default Shop
