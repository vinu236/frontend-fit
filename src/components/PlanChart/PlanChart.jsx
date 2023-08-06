import "./PlanChart.css";
import { FaCheckCircle, FaCalendar } from "react-icons/fa";
import { Link,useNavigate} from "react-router-dom";
import { useEffect, useState, } from "react";
import usePlans from "../../Hooks/usePlans";
import StripeCheckout from "react-stripe-checkout";
import instance from "../../api/axios";
import { toast } from "react-toastify";




const PlanChart = () => {
  const [plans] = usePlans();
  const [features,setFeatures]=useState({})
  const tokenAuth=localStorage.getItem("traineeToken");
  const navigate=useNavigate()
  const KEY="pk_test_51MsNZtSBVtOTQeiM259bxMtUS9u7rO4QIqheBAAMOaNsDl0Tb0Dti1gVPq0J2UYMzvHYrHZS8dujj2Po52rMZmrl00JnIedhYI"

    const handleClick=(card)=>{
    setFeatures(card)
    }
  const handleToken = async (token) => {
    try {
      const uid= localStorage.getItem("uid")
      const body = {
        token,
        uid,
       features
      };
      
      console.log(features);
    
   
      const {data,status} = await instance.post("plan/booking", body,{
        headers:{
          Authorization:`Bearer ${tokenAuth}`
        }
      });

      if(status===200){
        toast.success("Payment is Success");
        navigate("/");
      }


    } catch (error) {
      console.log(error)
      if(error.response){
        console.log(error.response)
        if(error.response.status===403){
          const message=error.response.data
          localStorage.removeItem("traineeToken")
          localStorage.removeItem("uid");
          toast.error(message);
          navigate("/login");
        }
        if(error.response.status===404){
          const message=error.response.data;
          toast.error(message);
        }
        if(error.response.status===401){
          const message=error.response.data
          console.log(message);
          localStorage.removeItem("traineeToken");
          localStorage.removeItem("uid")
          navigate("/login")
          toast.error(message);
        }
      }
    }
  };
  console.log(plans);

  const renderCard = plans.map((card, index) => {
    return (
      <div className="perspective min-h-[500px]">
        <div
          className={`bg-[#111] py-14 px-10 princing-plan--starter rounded-2xl card_side card_side--front ${
            card.Recommended ? "premium-plan" : ""
          }`}
        >
          <p className="plan-name text-center ">{card.heading}</p>
          <p className="plan-price text-white text-center">
            <span>RS</span>
            {card.price}
          </p>
          <ul className="list">
            {card.list.map((list, index) => {
              return (
                <li className="flex items-center  gap-3 text-white justify-center">
                  <FaCheckCircle className="text-lg text-custom-gym" />
                  <p className="text-xl">{list.list}</p>
                </li>
              );
            })}
          </ul>
          <div className="w-full flex justify-center mt-10">
            <button className="p-3 w-[40%] bg-custom-gym rounded-md hover:bg-orange-600 font-medium flip">
              Flip me
            </button>
          </div>
        </div>
        <div className="text-black  back-card card princing-plan--starter rounded-2xl card_side card_side--back ">
          <div className="">
            <div className=" flex flex-col cta gap-2">
              <h1 className="big-price-tag">RS {card.price}</h1>
              <Link
              className="font-medium btn text-center"
              onClick={()=>handleClick(card)}
            >
              <StripeCheckout
                 stripeKey={KEY} 
            currency="INR"
            amount={card.price * 100}
            token={handleToken}
          
          >
           
              Choose Plan
          </StripeCheckout>
            </Link>
              
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <section className="plans-section">
      <div className="containr">
        <span className="subheading ">Pricing</span>
      </div>
      <div className="grid grid-cols-3 card-container gap-4 containr">
        {renderCard}

        {/* <div className={`bg-[#000] py-14 px-10 princing-plan--starter rounded-2xl ${"premium-plan"}`}>
          <p className="plan-name text-center ">BASIC PLAN</p>
          <p className="plan-price text-white text-center">
            <span>RS</span>2500
          </p>
          <ul className="list">{rendereList}</ul>
          <div className="w-full flex justify-center mt-10">
            <Link className="p-3 w-35 bg-custom-gym rounded-md hover:bg-orange-600 font-medium active:scale-95">
              Choose Plan
            </Link>
          </div>
        </div> */}
        {/* <div className="bg-[#111] py-14 px-10 princing-plan--starter rounded-2xl ">
          <p className="plan-name text-center ">BASIC PLAN</p>
          <p className="plan-price text-white text-center">
            <span>RS</span>2500
          </p>
          <ul className="list">{rendereList}</ul>
          <div className="w-full flex justify-center mt-10">
            <Link className="p-3 w-35 bg-custom-gym rounded-md hover:bg-orange-600 font-medium active:scale-95">
              Choose Plan
            </Link>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default PlanChart;
