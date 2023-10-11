import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import trainerSlice from "./trainerSlice";
import bmiSlice from "./bmiSlice";
import planActiveSlice from "./planActiveSlice";
import RegisterToggleSlice from "./RegisterToggle";

//configuring store=> and store contains slices

const store = configureStore({
  reducer: {
    user: userSlice, // add userSlice to Redux store
    trainer: trainerSlice,
    bmi:bmiSlice,
   plan: planActiveSlice,
   RegisterToggle:RegisterToggleSlice
  },
});

export default store;
