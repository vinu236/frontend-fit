import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Otp from "../components/Otp/Otp";
import UserProfile from "../pages/UserProfile";
import UserLayout from "../Layout/UserLayout";
import PlanPage from "../pages/PlanPage";
import ChatPage from "../pages/ChatPage";
import AdminLayout from "../Layout/AdminLayout";
import DashBoard from "../pages/DashBoard";
import User from "../pages/Users";
import Trainer from "../pages/Trainer";
import ViewPlans from "../pages/Plans";
import AddTrainer from "../pages/AddTrainer";
import AddPlanForm from "../components/AddForm";
import Bookings from "../pages/Bookings";
import EditPlan from "../components/EditPlan";
import Login from "../components/Login/Login";
import {  ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';
import TrainerProfile from "../pages/TrainerProfile";
import TrainerLogin from "../pages/TrainerLogin";
import TrainerChatt from "../components/TrainerChat/TrainerChatt";
import SignUp from "../components/Signup/Signup";
import ErrorPage from "../pages/ErrorPage";
const UserRouter = () => {
  return (
    <>
    <Routes>
      <Route path="/"  element={<UserLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/user/profile" element={<UserProfile />} />
        <Route path="/plan" element={<PlanPage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/trainer/chat" element={<TrainerChatt />} />
        <Route path="/trainer/profile" element={<TrainerProfile/>}/>
      </Route>
      <Route path="/otp" element={<Otp />} />
   
    {/* <Route path="*" element={<ErrorPage/>} /> */}
    
    </Routes>

    <Routes>
        <Route path="/dashboard" element={<AdminLayout/>} >
        <Route path="/dashboard" element={<DashBoard/>} />
        <Route path= "/dashboard/users" element={<User/>} />
        <Route path= "/dashboard/trainer" element={<Trainer/>} />
        <Route path= "/dashboard/plans" element={<ViewPlans/>} />
        <Route path= "/dashboard/addTrainer" element={<AddTrainer/>} />
        <Route path= "/dashboard/add/plans" element={<AddPlanForm/>} />
        <Route path= "/dashboard/bookings" element={<Bookings/>} />
        <Route path= "/dashboard/edit/plan/:id" element={<EditPlan/>} />
      
        </Route >
    </Routes>
    <Routes>
      <Route path="/login" element={<> <ToastContainer/> <Login/></>}/>
      <Route path="/signup" element={<> <ToastContainer/> <SignUp/></>}/>
    </Routes>

    <Routes>
      <Route path="/trainer/login" element={<><ToastContainer/> <TrainerLogin/></>}/>
    </Routes>
    
  
    </>

  );
};

export default UserRouter;
