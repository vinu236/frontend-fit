import { useState } from "react";
import "./Pricing.css";
import { Link } from "react-router-dom";
const Pricing = () => {
    const [hoverLeftClass,setLeftHoverClass]=useState("")
    const [hoverRightClass,setRightHoverClass]=useState("")
    const handleAddHoverLeftClass=()=>{
        return(
            setLeftHoverClass('hover-left')
        )
    }
    const handleRemoveHoverLeftClass=()=>{
        return(
            setLeftHoverClass("")
        )
    }
    const handleAddHoverRightClass=()=>{
        setRightHoverClass('hover-right')
    }
    const handleRemoveHoverRightClass=()=>{
            setRightHoverClass("")
    }
  return (
    <section className="section-pricing py-[96px] bg-black">
        <div className='container-wrapper mb-14'>
                <h1 className='text-custom-gym text-xl inline-block font-semibold tracking-widest heading-underline-animate'>Plans</h1>

            </div>
      <div className={`container-wrapper split-container ${hoverLeftClass} ${hoverRightClass}`}>
        <div className="split left" onMouseEnter={handleAddHoverLeftClass} onMouseLeave={handleRemoveHoverLeftClass}>
          <h2>Recommended Plan</h2>
          <Link className="btnn" to={'/plan'}>Exclusive Perks</Link>
        </div>
        <div className="split right" onMouseEnter={handleAddHoverRightClass} onMouseLeave={handleRemoveHoverRightClass}>
          <h2>Gold Plan</h2>
          <Link className="btnn" to={'/plan'}>Budget Friendly</Link>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
