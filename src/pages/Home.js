import HomeHeader from "../components/HomeHeader";
import Card1 from "../components/Card1";
import Card2 from "../components/Card2";
import Card3 from "../components/Card3";
import Carousel from "../components/Carousel";
import Carousel2 from "../components/Carousel2";
import Carousel3 from "../components/Carousel3";
import Contact from "../components/Contatc";
import Map from "../components/Map";
import Footer from "../components/Footer";





function Home() {
  
  return (
    <div className="App">
      <HomeHeader/>
      <div>
        <Card1/>
        <Carousel/>
        <Carousel2/>
        <Card2/>
        <Card3/>
        <Carousel3/>
        <Contact/>
        <Map/>
        <Footer/>
        
      </div>
    </div>
  );
}

export default Home;
