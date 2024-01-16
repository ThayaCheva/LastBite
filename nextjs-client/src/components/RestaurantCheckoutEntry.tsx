import locIcon from "../../public/loc_icon.png"
import extlinkIcon from "../../public/extlink_icon.png"
import Image, { StaticImageData } from "next/image";

interface Order {
    item: string;
    quantity: number;
  }
  
interface RestaurantCheckoutEntryProp {
    entry: {
        restaurant: string;
        orders: Order[];
    };
}

export default function RestaurantCheckoutEntry( { entry }:RestaurantCheckoutEntryProp ) {

    return (
        <>
            <div className="restaurant-entry">
                <div className="upper-row">
                    <div className="restaurant-name">{entry.restaurant}</div>
                    <button className="tip-button" type="button">Tip</button>
                </div>
                <div className="middle-row">
                    <div className="right-middle-row">
                        <Image className="loc-icon" src={locIcon} alt="loc-icon"/>
                        <div className="location">Mount Waverley</div>
                        <Image className="extlink-icon" src={extlinkIcon} alt="extlink-icon"/>
                    </div>
                    <button className="edit-order-button">Edit order</button>
                </div>
                <div className="order-items">
                    {entry.orders.map((order) => {
                        return <p>{order.quantity} {order.item}</p>
                    })}
                </div>
                <div className="bottom-row">
                    <p className="pick-up-text">Pick-up at:</p>
                    <div className="selected-time">Today, 5:30 pm</div>
                </div>
            </div>
        </>
    )
}