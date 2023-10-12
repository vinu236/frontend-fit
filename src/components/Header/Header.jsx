import "./Header.css";
import "./HeaderQueries.css";
import { BiUser } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";
import { FaUserAlt } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
import ModalLogin from "../ModalLogin/ModalLogin";
import ModalSignUp from "../ModalSignup/ModalSignUp";
import { useSelector } from "react-redux";


const Header = () => {
  const [active,sectActive]=useState("");
const handleClick=()=>{
  sectActive('active')
}
const handleClose=()=>{
  sectActive('')
}
 const auth = useSelector(store=>store.user);




  return (
    <header className={`bg-black py-7 px-2 flex justify-around  gap-44 items-center header ${active}`}>
      <Link to={'/'} className=" logo">
        Sweat
      </Link>
      <nav className="text-white flex w-[55%] justify-between nav">
        <ul className="flex gap-3  text-[1.04rem]  tracking-wider nav-link-1">
        <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/plan"}>Plan</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/gallery"}>Gallery</Link>
          </li>
        </ul>
        
        {localStorage.getItem("traineeToken") || auth.Ttoken ? (
        <Link to={"/user/profile"}>
          <FaUserAlt className="text-white mr-6 h-5 cursor-pointer" />
        </Link>
      ) : localStorage.getItem("trainerToken")? (
        <Link to={"/trainer/profile"}>
          <FaUserAlt className="text-white mr-6 h-5 cursor-pointer" />
        </Link>
      ):(<ul className="flex gap-3 nav-link-2">
          <li>
            <ModalLogin/>
          </li>
          <li>
            <ModalSignUp/>
          </li>
        </ul>)
}
        <span className="close-icon hidden"><CgClose size={41} className="text-white" onClick={handleClose}/>fff
        </span>
      </nav>
      <div className="bg-effect hidden" onClick={handleClose}></div>
      {/* <BiUser className="text-white text-xl" /> */}
      <span className="hamburger-box">
      <GiHamburgerMenu className="text-white hamburger-icon" size={33} onClick={handleClick}/>

      </span>
      
      
    </header>
  );
};

export default Header;
