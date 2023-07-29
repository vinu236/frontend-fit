import "./Hero.css"
import "./HeroQueries.css"
const Hero=()=>{

    return(
        <section className="bg-image relative section-hero">
            <div className="text-neutral-300 text-6xl section-container  font-semibold absolute top-[40%] right-[7%] tracking-wider flex flex-col gap-[29px] ">
        <div className="animate-left	">
        Push  your <span className="bg-custom-head rounded-tl-3xl rounded-br-3xl rounded   animate-pulse p-2" >limits</span> 
        </div>
        <div className="animate-right">
        <span className="bg-custom-head rounded-tl-3xl rounded-br-3xl rounded  animate-pulse p-2 ">achieve</span> the  goals
        </div>
      </div>

        </section>
    );
}

export default Hero;
