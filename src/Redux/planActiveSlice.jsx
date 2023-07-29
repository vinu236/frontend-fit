import { createSlice } from "@reduxjs/toolkit";

const planActiveSlice = createSlice({
  name: "plan",
  initialState:{
    plan:{}
  },
  reducers: {
    setPlanActive: (state, action) => {
      state.plan = action.payload;
    },
   
  },
});

export const { setPlanActive,  } = planActiveSlice.actions;
export default planActiveSlice.reducer;
