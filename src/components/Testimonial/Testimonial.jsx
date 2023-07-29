import './Testimonial.css'
import './TestimonialQueries.css'
import {ImQuotesLeft,ImQuotesRight} from "react-icons/im";
import { useState,useEffect } from 'react';

const testimonials = [
    {
      name: "John Doe",
      position: "CEO",
      image: "https://images.unsplash.com/photo-1557296387-5358ad7997bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmFjZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      text: "Working with this company has been an incredible experience. Their dedication to quality and innovation is unmatched, and their team is always responsive and professional. I highly recommend them!"
    },
    {
      name: "Jane Smith",
      position: "Marketing Manager",
      image: "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZmFjZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      text: "I've had the pleasure of collaborating with this company on multiple projects, and they never disappoint. Their attention to detail and ability to deliver results is truly impressive. I wouldn't hesitate to work with them again."
    },
    {
      name: "Mike Johnson",
      position: "Sales Representative",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZhY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      text: "As a sales representative, I rely on this company's products to meet the needs of my clients. Their solutions are top-notch, and my customers are always satisfied. Their exceptional support team is an added bonus!"
    }
  ];
const Testimonial=()=>{
    const[currentIndex,setCurrentIndex]=useState(0);
    const{name,text,image}=testimonials[currentIndex]
    console.log(name,text,image)

   useEffect(() => {
  const interval = setInterval(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  }, 10000);

  return () => {
    clearInterval(interval);
  };
}, []);

    return(
        <section className="testimonial-section py-[90px] bg-black">
            <div className='container-wrapper mb-14'>
                <h1 className='text-custom-gym text-xl inline-block font-semibold tracking-widest heading-underline-animate'>Testimonial</h1>
            </div>
            <div className="container-wrapper testimonial-container pt-14 pb-14 pl-14 pr-14 relative rounded-xl">
                    <div className="progress-line bg-custom-gym "></div>
                    
                    <ImQuotesLeft className="absolute top-[70px] left-2 text-gray-600 quote-left" size={28}/>                    
                    <ImQuotesRight className="absolute top-[70px]  right-4 text-gray-600 quote-right"size={28}/>                    
                    <p className="text-white mt-5 text-xl mb-[29px] testimonial-text ">{text}</p>
                    <div className='user flex justify-center items-center gap-3' >
                        <img src={image} alt="" className='w-14 h-14 object-cover rounded-full user-img'/>
                        <h2 className='text-white user-name'>{name}</h2>
                    </div>
            </div>
        </section>
    );


}

export default Testimonial;