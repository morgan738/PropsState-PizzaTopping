import { useState } from "react"
import ToppingItem from "./ToppingItem"
const ToppingList = (props) => {
    const [toppings, setToppings] = useState(["cheese", "pineapple", "jalapenos", "sasuage", "kalamata olives", "honey"])
    console.log(toppings)

    const [selectedTopping, setSelectedTopping] = useState("...")

    return(
        <div>
            <h1>Your selected topping is {selectedTopping}</h1>
            
            <h2>List of toppings:</h2>
            <ul>
                {toppings.map((topping) => {
                    return(
                        <div key={topping}>
                            <ToppingItem toppingName={topping} changeIt={setSelectedTopping}/>

                        </div>
                    )
                })}
            </ul>
        </div>
    )
}

export default ToppingList