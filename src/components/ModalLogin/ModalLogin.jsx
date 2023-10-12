import { Link } from "react-router-dom";
import Modal from "../Modal/Modal.jsx";
import { useEffect, useState } from "react";
import InputField from "../InputField/inputField.jsx";
import "./LoginPage.css"
import useLogin from "../../Hooks/useLogin.jsx";
import ButtonLoader from "../ButtonLoader/ButtonLoader.jsx";
import { useDispatch, useSelector } from "react-redux";
import { setLoginToggle } from "../../Redux/RegisterToggle.jsx";
const ModalLogin = () => {
  const traineeUrl="/login"
  const{formErrors,formValues,handleChange,handleSubmit,isLoading}=useLogin(traineeUrl);
  const dispatch = useDispatch()

  const LoginToggle = useSelector(store => store.RegisterToggle.toggle.loginToggle);


  const handleShow = () => {
    dispatch(setLoginToggle(true))
  };
  const handleClose = () => {
    dispatch(setLoginToggle(false))
    
  };

  const modalElement=(
    <Modal onClose={handleClose}>
      <div className="form_container bg-black">
          <h1 className="login_heading text-custom-gym">Login</h1>
          <form className="form" onSubmit={handleSubmit}>
          {formErrors.username && (
              <p className="text-red-600 mb-2 mt-2">{formErrors.email}</p>
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
              <p className="text-red-600 mb-2 mt-2">{formErrors.password}</p>
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
            {isLoading ? 
            <ButtonLoader className="p-2 flex  items-center justify-center gap-2 in_btn w-full bg-custom-gym rounded-md hover:bg-orange-600 pointer-events-none " text={"Login"} size={25}/>
            :<button className="p-2 in_btn w-full bg-custom-gym rounded-md hover:bg-orange-600">Login</button>}
          </form>
          <div className="flex gap-2 items-center justify-center mt-9 ">
            <p>Don't have an account ?</p>
            <Link to={"/signup"} className="underline text-[#3c474c]">
              Sign up
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
        Login
      </Link>
      {LoginToggle && modalElement}
    </>
  );
};


export default ModalLogin;
