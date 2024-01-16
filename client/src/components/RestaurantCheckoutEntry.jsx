export default function RestaurantCheckoutEntry( { restaurant } ) {
    return (
        <>
            <div className="restaurant-entry">
                <div className="upper-row">
                    <div className="restaurant-name">{restaurant.restaurant}</div>
                    <button className="tip-button" type="button">Tip</button>
                    {/*<div className="right-upper-row">
                        <button className="tip-button" type="button">Tip</button>
                        <div className="selected-time">Today, 5:29 pm</div>
                    </div>*/}
                </div>
                <div className="middle-row">
                    <div className="right-middle-row">
                        <img className="loc-icon" src={"./src/images/loc_icon.png"} />
                        <div className="location">Mount Waverley</div>
                        <img className="extlink-icon" src={"./src/images/extlink_icon.png"} />
                    </div>
                    <button className="edit-order-button">Edit order</button>
                </div>
                <div className="order-items">
                    {restaurant.orders.map((order) => {
                        return <p>{order.quantity} {order.item}</p>
                    })}
                </div>
                <div className="bottom-row">
                    <p className="pick-up-text">Pick-up at:</p>
                    <div className="selected-time">Today, 5:29 pm</div>
                </div>
            </div>
        </>
    )
}