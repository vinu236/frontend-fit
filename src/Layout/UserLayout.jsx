import React from 'react'
import Header from '../components/Header/Header'
import {Outlet} from "react-router-dom"
import {  ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { setToken,setUserId } from '../Redux/userSlice';
import{setTrainerToken,setTrainerId} from "../Redux/trainerSlice"

const UserLayout = () => {
  
  const userToken=localStorage.getItem("traineeToken");
const userId=localStorage.getItem("uid");
const trainerToken=localStorage.getItem("trainerToken");
const tid=localStorage.getItem("tid");
const dispatch=useDispatch();

  if(userToken && userId){
    dispatch(setToken(userToken));
    dispatch(setUserId(userId));

  }
  if(trainerToken && tid){
    dispatch(setTrainerId(tid))
    dispatch(setTrainerToken(trainerToken))
  }
  return (
    <>
    <ToastContainer/>
    <Header/>
     <Outlet/>
    </>
  )
}

export default UserLayout