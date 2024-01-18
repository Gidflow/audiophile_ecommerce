// import  { useState } from 'react';
import "./Cart.css";
import PropTypes from "prop-types";
import data from "../../../../resources/data.json"
import { useContext, useState } from "react";
import { shopContext } from "../../../pages/SinglePage/singlePageContext";
import { Link } from "react-router-dom";








   

    const Cart = ({item, removeAll}) => {
      console.log(item)
   const {getTotalAmount, cartItem, removeCart, addCart } = useContext(shopContext);

  
   
   console.log(item);
  return (
    <>
    <div className='carter'>
        </div>
        <div className="cartContent">
        <div className="cart-text">
            <h2>Cart {`(${item.length})`} </h2>
            <button onClick={removeAll} className='removeAll' >{item.length > 0 ?"Remove all":""}</button>
        </div>

        <div className="cartProducts">
        {
            item.map((item, index)=>{

                return <div key={index} className="shopping">
                  <div className="image-text">
                    <img src={item.image.desktop} alt="" />
                    <div className="cartText2">
                        <h2>{item.other}</h2>
                        <p>{cartItem[item.id] <=1?item.price:item.price*cartItem[item.id]}</p>
                    </div>
                  </div>
                  <div className="btnGroup2">
                    <button onClick={()=>removeCart(item.id)} >-</button>
                    <input type="text" value={cartItem[item.id]<=1?cartItem[item.id]=1:cartItem[item.id]}/>
                    <button onClick={()=>addCart(item.id)} >+</button>
                  </div>
                </div>
            })
        }
        </div>
        <div className="total">
          
             <div className="totalItem">
              {item.length !== 0 && <><p>Total</p>
                  <div className="subTotal">${ getTotalAmount()}</div></>}
            </div>
        </div>
        {item.length !==0 && 
         <div className="checkoutBtn">
         <Link to="/checkout">CHECKOUT</Link>
      </div>}
       
        
        </div>
      
    </>
  )
}

Cart.propTypes = {
  item: PropTypes.array.isRequired, removeAll: PropTypes.array.isRequired
}

export default Cart