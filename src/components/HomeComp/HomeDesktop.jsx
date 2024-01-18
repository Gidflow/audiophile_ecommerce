import "./HomeDesktop.css";
import images from "./DesktopImages";
import bestGear from "../../../resources/assets/shared/desktop/image-best-gear.jpg"
import { Link } from "react-router-dom";
const HomeDesktop = () => {
  return (
    <>
      <div className="hero">
          <div className="heroDescription">
            <div className="text">
            <p className="p1">NEW PRODUCT</p>
            <h1>XX99 Mark II Headphones</h1>
            <p className="p2">Experience natural, lifelike 
            audio and exceptional build quality made for 
            the passionate music enthusiast.</p>
            </div>
            
            <div className="cta">
                <button><Link to={`/details/xx99-mark-two-headphones`}>See Product</Link></button>
            </div>
          </div>
        </div>
        <div className="imagesContainer">
        <div className="tile1">
          <div className="imageDiv">
            <img src={images.xx99headphone1}/>
            <div className="imgDes">
            <h1>HEADPHONES</h1>
            <div className="shop">
            <Link to={`/headphones`}>SHOP <svg xmlns="http://www.w3.org/2000/svg" width="8" height="12" viewBox="0 0 8 12" fill="none">
  <path d="M1.32227 1L6.32227 6L1.32227 11" stroke="#D87D4A" stroke-width="2"/>
</svg> </Link>
            
            </div>
            </div>
          </div>
          <div className="imageDiv">
             <img src={images.speaker1}/>
             <div className="imgDes">
               <h1>speakers</h1>
               <Link to={`/speakers`}>SHOP <svg xmlns="http://www.w3.org/2000/svg" width="8" height="12" viewBox="0 0 8 12" fill="none">
  <path d="M1.32227 1L6.32227 6L1.32227 11" stroke="#D87D4A" stroke-width="2"/>
</svg></Link>
             </div>
             
            </div>
            <div className="imageDiv">
            <img src={images["round-earphone"]}/>
            <div className="imgDes">
            <h1>Earphones</h1>
            <Link to={`/earphones`}><span>SHOP</span><span><svg xmlns="http://www.w3.org/2000/svg" width="8" height="12" viewBox="0 0 8 12" fill="none">
  <path d="M1.32227 1L6.32227 6L1.32227 11" stroke="#D87D4A" stroke-width="2"/>
</svg></span></Link>
            </div>
            </div>
        </div>
        <div className="speakerTile">
            <div className="speaker">
            <img src={images.zx9}/>
            <div className="speaker-content">
                <h1>ZX9 SPEAKER</h1>
                <p>Upgrade to premium speakers that are 
                    phenomenally built to deliver truly remarkable 
                    sound.</p>
                <button><Link to={`/details/zx9-speaker`}>SEE PRODUCT</Link></button>   
            </div>
            </div>
            <div className="shape"></div>
        </div>
        <div className="speakerTile2">
            <div className="image1">
            <img src={images.speaker}/>
            <div className="imageContent">
                <h1>ZX7 SPEAKER</h1>
                <button><Link to={`/details/zx7-speaker`}>SEE PRODUCT</Link></button>
            </div>
            </div>
            <div className="image2">
                <img src={images.earpod}/>
                <div className="imageContent2">
                    <h1>YX1 EARPHONES</h1>
                    <button><Link to={`/details/yx1-earphones`}>SEE PRODUCT</Link></button>
                </div>
            </div>
        </div>
        <div className="speakerTile3">
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
    </>
   
  )
}

export default HomeDesktop