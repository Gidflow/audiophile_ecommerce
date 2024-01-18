import { createContext, useState} from 'react';
import data from "../../../resources/data.json";



export const shopContext = createContext();

const getDefaultCart =()=>{

    let cart = {};

    for(let i =1; i<=data
      .length; i++){
        cart [i] = 0;
    }
    return cart;
}
const SinglePageContext = (props) => {
     
    const [cartItem, setCartItem] = useState(getDefaultCart())

    const [item, setItem] = useState([]);
    // console.log(cartItem)

    const addCart=(itemId)=>{
       
        setCartItem(prev=>({...prev, [itemId]:prev[itemId]+1}))
    }

    const removeCart=(itemId)=>{

        setCartItem(prev=>({...prev, [itemId]:prev[itemId]-1}))
    }

    const getTotalAmount = ()=>{

      let subTotal = 0;
   for(const item in cartItem){
       if(cartItem[item] > 0){
        let infoPrice = data.find(product=>product.id === Number(item))

        subTotal += cartItem[item] * infoPrice.price;
       }
   }

   return subTotal;
 }

 const grandTotal=()=>{

  let shipping = 50;
   let gTotal = 0;
   let vat =Math.round(getTotalAmount()*0.2)

   gTotal = shipping + vat + getTotalAmount();

   return gTotal;
   
 }
  return (
    <shopContext.Provider value={{grandTotal, getTotalAmount, item, setItem, cartItem, addCart, removeCart}}>
      {props.children}
    </shopContext.Provider>
  )
}

export default SinglePageContext