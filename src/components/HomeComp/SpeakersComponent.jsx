import Header from "../../pages/Header";
import Footer from "../../pages/Footer/Footer";
import images from "./DesktopImages";
import data from "../../../resources/data.json";
import { Link } from "react-router-dom";
import bestGear from "../../../resources/assets/shared/desktop/image-best-gear.jpg";
const SpeakersComponent = () => {
  return (
     <div className='headphone'>
       <div className='headphoneHeader'>
        <Header/>
        
            <h1 className="heading">Speakers</h1>
        
       </div>
       <div className="headphoneContent">
       <div className="headphoneProduct">
       {
        data.map(data=>{
          if (data.category === "speakers") {
          return  <div key={data.id} className={`${data.reverse && "reverse"} headphoneItem`}>
            <img src={data.image.desktop} alt="earphone1" />
            <div className="hpContent">
              <div>
                {
                  data.new && <h3>new product</h3>
                }
              <h1 style={{width:"60%"}}>{data.name}</h1>
              </div>
              <p>{data.description}</p>
                  <button><Link to={`/details/${data.slug}`}>See Product</Link></button>
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
            <Link to={`/headphones`}>SHOP <svg xmlns="http://www.w3.org/2000/svg" width="8" height="12" viewBox="0 0 8 12" fill="none">
  <path d="M1.32227 1L6.32227 6L1.32227 11" stroke="#D87D4A" strokeWidth="2"/>
</svg></Link>
            {/* <img className="arrow" src={images.arrow} alt="arrow"/> */}
            </div>
            </div>
          </div>
          <div className="imageDiv">
             <img src={images.speaker1}/>
             <div className="imgDes">
               <h1>speakers</h1>
               <Link to={`/speakers`}>SHOP <svg xmlns="http://www.w3.org/2000/svg" width="8" height="12" viewBox="0 0 8 12" fill="none">
  <path d="M1.32227 1L6.32227 6L1.32227 11" stroke="#D87D4A" strokeWidth="2"/>
</svg></Link>
             </div>
             
            </div>
            <div className="imageDiv">
            <img src={images["round-earphone"]}/>
            <div className="imgDes">
            <h1>Earphones</h1>
            <Link to={`/earphones`}>SHOP <svg xmlns="http://www.w3.org/2000/svg" width="8" height="12" viewBox="0 0 8 12" fill="none">
  <path d="M1.32227 1L6.32227 6L1.32227 11" stroke="#D87D4A" strokeWidth="2"/>
</svg></Link>
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

export default SpeakersComponent