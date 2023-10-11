import { createSlice } from "@reduxjs/toolkit";

const RegisterToggleSlice = createSlice({
  name: "Register_Login",
  initialState:{
    toggle:{
        loginToggle:false,
        SignUpToggle:false,
    }
  },
  reducers: {
    setLoginToggle: (state, action) => {
      state.toggle.loginToggle = action.payload;
    },
   setSignUpToggle:(state , action) => {
    state.toggle.SignUpToggle = action.payload;
   }
  },
});

export const { setLoginToggle, setSignUpToggle } = RegisterToggleSlice.actions;
export default RegisterToggleSlice.reducer;
