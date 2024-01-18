// import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from '../../../pages/Header';
import "./details.css";
import data from "../../../../resources/data.json";
import images from "../DesktopImages";
import bestGear from "../../../../resources/assets/shared/desktop/image-best-gear.jpg"
import Footer from '../../../pages/Footer/Footer';
import { useState } from 'react';
import Cart from './Cart';
import {shopContext} from "../../../pages/SinglePage/singlePageContext"
import { useContext } from 'react';

const Details = () => {
   
    const {item, setItem, addCart, removeCart, cartItem} = useContext(shopContext);   
    const {slug} = useParams();
 
  

   const [show, setShow] = useState(false);

   const showHandle=()=>{

    setShow(prev=>!prev);
   }

   console.log(cartItem)
  
  //  const list = data.map(data=>data)
  //  const addCounter = ()=>{
       
  //   setCounter(prev=>prev + 1)
  //  }
  //  const substractCounter=()=>{
  //   setCounter(prev=>{
  //     if(prev > 1){
  //       return prev -1
  //     }

  //     else{
  //       return prev
  //     }
  //   })
  //  }

   const addToCart=(id)=>{

    const newItem = data.filter(items=>items.id === id);
      
    if(item.indexOf(newItem) !== -1){
      return;
    }
    else{
      return setItem([...item, ...newItem])
    }
    
    }

    const removeAll = ()=>{
      setItem([]);
    }
    

  //  console.log(list);
     
  return (
    <div className='details'>
     <header className='detailsHead'>
      <Header showHandle={showHandle}/>
     </header>
     <div className="detailsContent">
      
      <div className="back">
        <Link to="/">go back</Link>
      </div>
      <div className={`${show && "display1"} display`}>
                 <Cart removeAll={removeAll} item={item}/>
              </div>
      <div className="headphoneProduct">
       { data &&
        data.map(data=>{
          if (data.slug === slug) {
          return <div key={data.id} className="detailProduct">
              
              <div  className='headphoneItem'>
            <img src={data.image.desktop} alt="earphone1" />
            <div className="hpContent">
              <div>
                {
                  data.new && <h3>new product</h3>
                }
              <h1>{data.name}</h1>
              </div>
              <p>{data.description}</p>
              <p className='price'>$ {data.price}</p>
                 <div className="buttons">
                  <div className="btnGroup">
                    <button onClick={()=>removeCart(data.id)}>-</button>
                    <input type="text" value={cartItem[data.id]<=1?1:cartItem[data.id]}/>
                    <button onClick={()=>addCart(data.id)}>+</button>
                  </div>
                  <div className="singlebtn">
                    <button onClick={()=>addToCart(data.id)}>ADD TO CART</button>
                  </div>
                 </div>
            </div>
          </div>
          <div className="text-description">
             <div className="features">
              <h1>FEATURES</h1>
              <p>{data.features}</p>
             </div>
             <div className="box">
              <div className="headingBox">
              <h1>in the box</h1>
              </div>
             <div className="boxDescription">
             {data.includes.map((items, index)=>{
              return  <p key={index}><span>{items.quantity}x</span><span>{items.item}</span></p>
              })}
             </div>
             </div>
             </div>
             <div className="gallery">
              <div className="galleryGroup">
               <img src={data.gallery.first.desktop} alt="gallery1" />
               <img src={data.gallery.second.desktop} alt="gallery2" />
              </div>
              <div className="singleGallery">
                <img src={data.gallery.third.desktop} alt="" />
              </div>

             </div>
             <div className="others">
              <h2>you may also like</h2>
              <div className="othersItems">
              {data.others.map((item, index)=>{
                return  <div key={index} className="othersImage">
                <img src={item.image.desktop} alt="others image" />
                <h4>{item.name}</h4>
                <button><Link to={`/details/${item.slug}`}>See Product</Link></button>
              </div>
              })}
              </div>
             </div>
         
          </div>
          }
        })
      }
     
       </div>
       <div className="imagesContainer">
        <div className="tile1">
          <div className="imageDiv">
            <img src={images.xx99headphone1}/>
            <div className="imgDes">
            <h1>HEADPHONES</h1>
            <div className="shop">
            <a>SHOP </a>
            {/* <img className="arrow" src={images.arrow} alt="arrow"/> */}
            </div>
            </div>
          </div>
          <div className="imageDiv">
             <img src={images.speaker1}/>
             <div className="imgDes">
               <h1>speakers</h1>
               <a href="#">SHOP</a>
             </div>
             
            </div>
            <div className="imageDiv">
            <img src={images["round-earphone"]}/>
            <div className="imgDes">
            <h1>Earphones</h1>
            <a>SHOP</a>
            </div>
            </div>
            </div>
            </div>
            <div className="speakerTile3 mAdjust">
            <div className="imageContent3">
                <h1>Bringing you the <span>best</span> audio gear</h1>
                <p>Located at the heart of New York City, 
                  Audiophile is the premier store for high 
                  end headphones, earphones, speakers, and 
                  audio accessories. We have a large showroom 
                  and luxury demonstration rooms available for 
                  you to browse and experience a wide range of 
                  our products. Stop by our store to meet some 
                  of the fantastic people who make Audiophile the 
                  best place to buy your portable audio equipment.</p>
            </div>
            <img src={bestGear} alt="bestGear"/>
        </div>
     </div>
     
     <Footer/>
    </div>
  )
}

export default Details