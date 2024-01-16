import RestaurantCheckoutEntry from "./RestaurantCheckoutEntry"

export default function Checkout() {
    const orders = [{restaurant: "KFC", orders: [{item: "Chicken Nuggets", quantity: 2},
                                                 {item: "French Fries", quantity: 23}]}, 
                    {restaurant: "Sushi Hub", orders: [{item: "Salmon Nigiri", quantity: 1},
                                                       {item: "Salmon Sashimi", quantity: 3}]}]
    return (
        <aside id="checkout-bar">
            <header>
                <h2>Select pick up-times</h2>
            </header>
            {orders.map((order) => {
                return <RestaurantCheckoutEntry entry={order}/>
            })}
            <div className="order-button-wrapper">
            <button className="order-button">Place order</button>
            </div>
        </aside>
    )
}