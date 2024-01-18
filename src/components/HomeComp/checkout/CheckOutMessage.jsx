import {FaMarker} from "react-icons/fa"
import { shopContext } from "../../../pages/SinglePage/singlePageContext";
import { useContext } from "react";
import "./CheckOutMessage.css";

const CheckOutMessage = () => {

    const {grandTotal, item, cartItem} = useContext(shopContext);
  return (
    <div className="chMessage">
       <div className="heading">
        <div className="marked">
            <FaMarker/>
        </div>
        <h1>THANK YOU FOR YOUR ORDER</h1>
       </div>
       <p>You will receive an email confirmation shortly.</p>
       <div className="productMessage">
       {item.map((items, index)=>{
        return <div key={index} className="messageItems">
          <div className="messageImg">
          <div className="image-text">
             <img src={items.image.desktop} alt="" />
             <div className="cartText2">
             <h2>{items.other}</h2>
            <p>{items.price}</p>
           </div>
        </div>
        <p>x{cartItem[items.id]}</p>
          </div>
        </div>
       })}
       <div className="mTotal">
        <h3>GRAND TOTAL</h3>
        <h2>{grandTotal()}</h2>

       </div>
       </div>
    </div>
  )
}

export default CheckOutMessage