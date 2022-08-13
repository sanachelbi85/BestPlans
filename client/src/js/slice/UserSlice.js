import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from "axios";


export const userRegister = createAsyncThunk("user/register", async (user)=>{
  try {
    let reponse = await axios.post(
      "http://localhost:5001/user/register",
      user
    );
    return await response;
  } catch (error) {
    console.log(error);
  }
});

const initialState = {
  user: null,
  status: null,
}

export const UserSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {},
  extraReducers: {
    [userRegister.pending]:(state)=>{
      state.status = "pending";
    },
    [userRegister.fulfilled]:(state,action)=>{
      state.status = "fulfilled";
      state.user = action.payload.data.user;
      localStorage.setIteam("token",action.payload.data.user );
    },
    [userRegister.rejected]:(state)=>{
      state.status = "rejected";
    },
  },
});
  

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = UserSlice.actions

export default UserSlice.reducer