import "./Home.css";
import Header from "../Header";
import HomeDesktop from "../../components/HomeComp/HomeDesktop";
import Footer from "../Footer/Footer";
const Home = () => {
  return (
    <div className="heroContainer">
        <div>
        <Header/>
        </div>
        <HomeDesktop/>
        <Footer/>
    </div>
  )
}

export default Home