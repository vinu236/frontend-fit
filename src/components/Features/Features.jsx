import "./Features.css";
import {
  GiWeightLiftingUp,
  GiFruitBowl,
  GiWeight,
  GiWeightScale,
} from "react-icons/gi";

const Features = () => {
  return (
    <section className="section-feature py-[100px] bg-black">
      <div className="container-wrapper flex justify-around gap-3 items-center flex-wrap">
        <div className="feature">
          <GiWeight className="g-icon" size={80}/>
          <h3 className="text-white">Weight</h3>
          <p className="text-white">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
            illum aliquam similique eius error tempore facilis ut, eveniet neque

          </p>
        </div>
        <div className="feature">
          <GiFruitBowl className="g-icon"size={80}/>
          <h3 className="text-white">Weight</h3>
          <p className="text-white">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
            illum aliquam similique eius error tempore facilis ut, eveniet neque
  
          </p>
        </div>
        <div className="feature">
          <GiWeightLiftingUp className="g-icon" size={80} />
          <h3 className="text-white">Weight</h3>
          <p className="text-white">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
            illum aliquam similique eius error tempore facilis ut, eveniet neque
          </p>
        </div>
        <div className="feature">
          <GiWeightScale className="g-icon" size={80}/>
          <h3 className="text-white">Weight</h3>
          <p className="text-white">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
            illum aliquam similique eius error tempore facilis ut, eveniet neque
 
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
