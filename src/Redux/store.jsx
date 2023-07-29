import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import trainerSlice from "./trainerSlice";
import bmiSlice from "./bmiSlice";
import planActiveSlice from "./planActiveSlice";

//configuring store=> and store contains slices

const store = configureStore({
  reducer: {
    user: userSlice, // add userSlice to Redux store
    trainer: trainerSlice,
    bmi:bmiSlice,
   plan: planActiveSlice
  },
});

export default store;
