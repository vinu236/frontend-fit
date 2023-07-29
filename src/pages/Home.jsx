import Header from "../components/Header/Header.jsx";
import Hero from "../components/Hero/Hero.jsx";
import Featured from "../components/Featured/Featured.jsx";
import Gallery from "../components/Gallery/Gallery.jsx";
import Testimonial from "../components/Testimonial/Testimonial.jsx";
import Features from "../components/Features/Features.jsx";
import Pricing from "../components/Pricing/Pricing.jsx";
const Home=()=>{
    return(
    <>
    
    <Hero/>
    <Featured/>
    <Testimonial/>
    <Gallery/>
    <Pricing/>
    <Features/>
    </>
    )
}


export default Home;