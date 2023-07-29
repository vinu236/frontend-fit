import ReactDOM from "react-dom";
import { useEffect } from "react";
const Modal = ({children,onClose }) => {
    //!only want to run the useEffect fn one time when the component is render
    useEffect(()=>{
      console.log("use effect from modal")
      // ! restrict the user to scroll when modal comp display
      document.body.classList.add('overflow-hidden');

      //! cleanup function
      return()=>{ 
        
      document.body.classList.remove("overflow-hidden");
     
      }
  },[])

  const handleCloseModal=()=>{
    onClose()
  }
    
  return ReactDOM.createPortal(
    
    <div className="">
    <div className="absolute inset-0 bg-neutral-800 opacity-80" onClick={handleCloseModal}></div>
    <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-white">
        {children}
    </div>
    </div>
    ,document.querySelector('#modal-container')
  );
};

export default Modal;
