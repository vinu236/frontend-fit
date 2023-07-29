import { createSlice } from "@reduxjs/toolkit";

const bmiSlice = createSlice({
  name: "bmi",
  initialState: {
  },
  reducers: {
    setBmi: (state, action) => {
      state.bmi = action.payload;
    },
  },
});

export const { setBmi,  } = bmiSlice.actions;
export default bmiSlice.reducer;
