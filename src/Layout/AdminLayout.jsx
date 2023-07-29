import SideBar from "../components/SideBar";
import { Outlet } from "react-router";
import {  ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';

const AdminLayout = () => {
    return (
      <>
      <ToastContainer/>
      <div className="flex">
        <SideBar /> 
        <Outlet />
      </div>
      </>
    );
  };

  export default AdminLayout;