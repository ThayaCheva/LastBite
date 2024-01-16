import RestaurantCheckoutEntry from "./RestaurantCheckoutEntry"
import "./checkout.css"

export default function Checkout() {
    const orders = [{restaurant: "KFC", orders: [{item: "Chicken Nuggets", quantity: 2},
                                                 {item: "French Fries", quantity: 23}]}, 
                    {restaurant: "Sushi Hub", orders: [{item: "Salmon Nigiri", quantity: 1},
                                                       {item: "Salmon Sashimi", quantity: 3}]}]
    return (
        <aside>
            <header>
                <h2>Select pick up-times</h2>
            </header>
            console.log(orders.map(orders))
            {orders.map((order) => {
                return <RestaurantCheckoutEntry restaurant={order}/>
            })}
            <div className="order-button-wrapper">
            <button className="order-button">Place order</button>
            </div>
        </aside>
    )
}