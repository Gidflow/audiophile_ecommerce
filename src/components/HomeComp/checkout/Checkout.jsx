
import { Link } from "react-router-dom"
import Header from "../../../pages/Header"
import "./Checkout.css"
import Footer from "../../../pages/Footer/Footer"
import { shopContext } from "../../../pages/SinglePage/singlePageContext";
import { useContext, useState } from "react";
import "../details/Cart.css"
import CheckOutMessage from "./CheckOutMessage";


const Checkout = () => {

    const {grandTotal, getTotalAmount, item, cartItem} = useContext(shopContext);
    console.log(item);

    const [showMessage, setShowMessage] = useState(false);

    const showMessageHandler=()=>{
        setShowMessage(prev=>!prev)
    }
  return (
    <div className="checkout">
     <header className="checkoutHead">
        <Header/>
     </header>
     <div className="checkoutContents">
     <div className="back">
        <Link to="/">go back</Link>
      </div>
      <div className="checkoutItems">
        <form action="html">
            <div className="checkoutContact">
            <h1>CHECKOUT</h1>
        <div className="checkoutForm">
            <div className="billDetails">
            <h3>BILLING DETAILS</h3>
             <div className="billForm">
            <div className="inputed">
            <label htmlFor="name">
                Name
            </label>
            <input type="text" placeholder="Alexei Ward" required name="name"/>
            </div>
            <div className="inputed">
            <label htmlFor="email">
                E-mail Address
            </label>
            <input name="email" type="email" placeholder="alexei@mail.com" required/>
            </div>
            <div className="inputed">
            <label htmlFor="number">
                Phone Number
            </label>
            <input name="number" type="text" placeholder="+1 202-555-0136" required/>
            </div>
            
        </div>
            </div>
            <div className="shippingInfo">
                <h3>shipping info</h3>
                <div className="address">
                    <label htmlFor="address">Address</label>
                    <input type="text" placeholder="1137 Williams Avenue" name="address" />
                </div>
                <div className="addressDetails">
                    <div className="addDetailsInput">
                        <label htmlFor="zip">Zip Code</label>
                        <input type="text" placeholder="10001" name="Zip" required />
                    </div>
                    <div className="addDetailsInput">
                        <label htmlFor="city">City</label>
                        <input type="text" placeholder="New York" required />
                    </div>
                    <div className="addDetailsInput">
                        <label htmlFor="country">Country</label>
                        <input type="text" placeholder="United States" required />
                    </div>
                </div>
                </div>
               <div className="paymentDetails">
                <h3>PAYMENT DETAILS</h3>
                <div className="paymentItem">
                <p>Payment Method</p>
                     <div className="paymentInfo">
                     <div className="radio">
                        <input type="radio" id="payment" name="e-money" checked/>
                        <label htmlFor="e-money">e-Money</label>
                     </div>
                     <div className="radio">
                        <input type="radio" id="payment" name="e-money" />
                        <label htmlFor="e-money">w-Money</label>
                     </div>
                     </div>
                     
                
                </div>
                <div className="paymentInfo-2">
                
                     <div className="mobile">
                     <label htmlFor="e-money Number">e-Money Number</label>
                        <input type="number"  name="mobile" placeholder="238521993" required/>
                        
                     </div>
                
                
                     <div className="mobile">
                     <label htmlFor="mobile-pin">w-Money PIN</label>
                        <input type="number" id="payment" name="mobile-pin" placeholder="6891" minLength={4} maxLength={4} required />
                        
                     </div>
                
                </div>
                
               </div>
            

        </div>
            </div>
           <div className="summary">
            <h1>SUMMARY</h1>
            {
            item.map((items, index)=>{

                return <div key={index} className="shopping">
                  <div className="image-text">
                    <img src={items.image.desktop} alt="" />
                    <div className="cartText2">
                        <h2>{items.other}</h2>
                        <p>{items.price}</p>
                    </div>
                  </div>
                  <div className="quantity">
                    <p>x{cartItem[items.id]}</p>
                  </div>
                </div>
            })
        }

        <div className="grand-total">
           <div className="total-items">
            <div className="totalItem">
            {item.length != 0 && <><p>TOTAL</p>
                  <div className="subTotal">${ getTotalAmount()}</div></>}
            </div>
            <div className="totalItem">
            <p>SHIPPING</p>
            <div className="subTotal">$50</div>
            </div>
            <div className="totalItem">
            <p>VAT (INCLUDED)</p>
            <div className="subTotal">${Math.round(getTotalAmount()*0.2)}</div>
            </div>
           </div>
           <div className="gTotal">
           <div className="totalItem">
            {item.length != 0 && <><p>GRAND TOTAL</p>
                  <div className="subTotal">${ grandTotal()}</div></>}
            </div>
           </div>
           <div className={`${showMessage && "show-message"} show-message1`}>
         <CheckOutMessage/>
      </div>
           <div className="checkoutBtn">
         <button type="submit"  onSubmit={showMessageHandler} >CONTINUE TO PAY</button>
      </div>
        </div>
           </div>
        </form>
      </div>
      
     </div>
     <div className="checkoutFooter">
     <Footer/>
     </div>
     
    </div>
  )
}

export default Checkout