import "./NewBurgerAnimation.css"

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}  

function NewBurgerAnimation({bpc}){
    const fromTop = getRandomInt(self.innerHeight);
    console.log("From top: " + fromTop.toString());
    <div className="burgerPlus" style={{position:"absolute", top: fromTop.toString() + "px"}}>
        +{bpc}🍔
    </div>
}

export default NewBurgerAnimation;