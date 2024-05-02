import { createSlice } from "@reduxjs/toolkit";
import { axiosMusic } from "../../utils/configAxios";

const initialState = {
    name: "",
    email: "",
    token: "",
};

const userSalice = createSlice({
  name: "user",
  initialState: localStorage.getItem("user-gm")? JSON.parse(localStorage.getItem("user-gm")): initialState,
  reducers: {
    setLoginData: (state, action) => {
        const loginData = action.payload
        const newState = {...state, ...loginData}
        localStorage.setItem("user-gm", JSON.stringify(newState))
        return newState
    },
    logout: () => {
      localStorage.removeItem('user-gm');
      return initialState;
    }
  },
});

export const {setLoginData, logout} = userSalice.actions 

export const login = (data, navigate) => (dispatch) => {
  axiosMusic
    .post("/api/auth/login", data)
    .then(({ data }) => {
      dispatch(setLoginData(data));
      navigate("/")
    })
    .catch((err) => {
      console.log(err);
    });
};

export default userSalice.reducer;
