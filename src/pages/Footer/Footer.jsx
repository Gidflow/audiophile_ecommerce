import logo from "../../../resources/assets/shared/desktop/logo.svg";
import "./Footer.css";
import facebook from "../../../resources/assets/shared/desktop/icon-facebook.svg";
import twitter from "../../../resources/assets/shared/desktop/icon-twitter.svg";
import instagram from "../../../resources/assets/shared/desktop/icon-instagram.svg";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footerContainer">
      <div className='logoNav'>
      <img className="logo" src={logo} alt="logo"/>
      <nav>
        <ul className=" footNav">
        <li><Link to="/">HOME</Link></li>
            <li><Link to={`/headphones`}>HEADPHONES</Link></li>
            <li><Link to={`/speakers`}>SPEAKERS</Link></li>
            <li><Link to={`/earphones`}>EARPHONES</Link></li>
        </ul>
      </nav>
      </div>
      <div className="descriptionMedia">
        <div className="description">
          <p>Audiophile is an all in one stop to 
            fulfill your audio needs. We’re a small 
            team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our 
            demo facility - we’re open 7 days a 
            week.</p>
        </div>
        <div className="social">
          <img src={facebook} alt="facebook"/>
          <img src={twitter} alt="twitter"/>
          <img src={instagram} alt="instagram"/>
        </div>
      </div>
      <div className="copyRight">
        <p>Copyright 2021. All Rights Reserved</p>
      </div>
      </div>
    </footer>
  )
}

export default Footer