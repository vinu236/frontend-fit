import { Link } from "react-router-dom";
import Modal from "../Modal/Modal.jsx";
import { useState } from "react";
import InputField from "../InputField/inputField.jsx";
import "../ModalLogin/LoginPage.css"
import useSignup from "../../Hooks/useSignup.jsx";
import ButtonLoader from "../ButtonLoader/ButtonLoader.jsx";
const ModalSignUp = () => {
  const [showModal, setShowModal] = useState(false);
  const{formValues,formErrors,handleChange,handleSubmit,isLoading}=useSignup()

  const handleShow = () => {
    setShowModal(true);
  };
  const handleClose = () => {
    setShowModal(false);
  };
  console.log(showModal);

  const modalElement=(
    <Modal onClose={handleClose}>
      <div className="form_container bg-black">
          <h1 className="login_heading text-custom-gym">SignUp</h1>
          <form className="form" onSubmit={handleSubmit}>
          {formErrors.username && (
              <p className="text-red-600 mt-2 mb-2">{formErrors.username}</p>
            )}
          <div className="form_email">
          
              <InputField
                type="text"
                name="username"
                value={formValues.username}
                required
                onChange={handleChange}
                label={"User Name"}
              />
            </div>
            {formErrors.username && (
              <p className="text-red-600 mt-2 mb-2">{formErrors.username}</p>
            )}
            <div className="form_email">
           
              <InputField
                type="email"
                name="email"
                value={formValues.email}
                required
                onChange={handleChange}
                label={"Email"}
              />
            </div>
            {formErrors.password && (
              <p className="text-red-600 mt-2 mb-2">{formErrors.password}</p>
            )}
            <div className="form_password">
            
              <InputField
                type="password"
                name="password"
                required
                value={formValues.password}
                label={"Password"}
                onChange={handleChange}
              />
            </div>
            {formErrors.confirmPassword && (
              <p className="text-red-600 mt-2 mb-2">{formErrors.confirmPassword}</p>
            )}
            <div className="form_ConfirmPassword">
           
              <InputField
                type="password"
                name="confirmPassword"
                required
                value={formValues.confirmPassword}
                label={"ConfirmPassword"}
                onChange={handleChange}
                className=""
              />
            </div>
           {isLoading ? <ButtonLoader className="p-2 flex items-center justify-center gap-2 in_btn w-full bg-custom-gym rounded-md hover:bg-orange-600 pointer-events-none" text={"Signup"}/>
            :<button className="p-2 in_btn w-full bg-custom-gym rounded-md hover:bg-orange-600">SignUp</button>}
          </form>
          <div className="flex gap-2 items-center justify-center mt-9 ">
            <p>Already have an account ?</p>
            <Link to={"/login"} className="underline text-[#3c474c]">
              Login
            </Link>
          </div>
        </div>
    </Modal>
  )

  return (
    <>
      <Link
        className="text-white text-[1.04rem] tracking-wider relative"
        onClick={handleShow}
      >
        SignUp
      </Link>
      {showModal && modalElement}
    </>
  );
};


export default ModalSignUp;
