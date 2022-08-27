import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from "axios";



export const userRegister = createAsyncThunk("user/register", async (user)=>{
  try {
    let response = await axios.post(
      "http://localhost:5001/User/register",
      user
    );
    return response;
  } catch (error) {
    console.log(error);
  }
});
export const userLogin = createAsyncThunk("user/login", async (user)=>{
  try {
    let response = await axios.post(
      "http://localhost:5001/User/login",user);
    return  response;
  } catch (error) {
    console.log(error);
  }
});
export const userCurrent = createAsyncThunk("user/current", async ()=>{
  try {
    let response = await axios.get(
      "http://localhost:5001/User/current",{
        headers:{
          Authorization: localStorage.getItem("token"),
        }
      }
    );
    return  response;
  } catch (error) {
    console.log(error);
  }
});

//get users
export const getuser = createAsyncThunk("user/get", async ()=>{
  try {
    let result = await axios.get( "http://localhost:5001/user/");
    return result;
  } catch (error) {
    console.log(error);
  }
});

//update user
export const updateuser = createAsyncThunk("user/put", async (id)=>{
  try {
    let result = await axios.put(`http://localhost:5001/user/${id}` );
    return  result;
  } catch (error) {
    console.log(error);
  }
});

//delete user
export const deleteuser = createAsyncThunk("user/delete", async (id)=>{
  try {
    let result = await axios.delete(`http://localhost:5001/user/${id}` );
    return  result;
  } catch (error) {
    console.log(error);
  }
});


const initialState = {
  user: null,
  status: null,
}

export const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state , action) => {
      state.user = null;
      localStorage.removeItem("token");
    },
  },
  extraReducers: {
    [userRegister.pending]:(state)=>{
      state.status = "pending";
    },
    [userRegister.fulfilled]:(state,action)=>{
      state.status = "fulfilled";
      state.user = action.payload.data.newuserToken;
      localStorage.setItem("token", action.payload.data.token);
/*       state.user = action.payload.data.user;
      localStorage.setIteam("token",action.payload.data.user ); */
    },
    [userRegister.rejected]:(state)=>{
      state.status = "rejected";
    },
    [userLogin.pending]:(state)=>{
      state.status = "pending";
    },
    [userLogin.fulfilled]:(state,action)=>{
      state.status = "fulfilled";
      state.user = action.payload.data.user;
      localStorage.setItem("token",action.payload.data.token )   
     },
    [userLogin.rejected]:(state)=>{
      state.status = "rejected";
    },
    [userCurrent.pending]:(state)=>{
      state.status = "pending";
    },
    [userCurrent.fulfilled]:(state,action)=>{
      state.status = "fulfilled";
      state.user = action.payload.data.user;
    },
    [userCurrent.rejected]:(state)=>{
      state.status = "rejected";
    },
    [getuser.fulfilled]:(state,action)=>{
      state.status = "fulfilled";
      state.users = action.payload.data.user
    },
    [getuser.pending]:(state)=>{
      state.status = "pending";
    },
    [getuser.rejected]:(state)=>{
      state.status = "rejected";
    },
    [deleteuser.fulfilled]:(state,action)=>{
      state.status = "fulfilled";
    },
    [deleteuser.rejected]:(state)=>{
      state.status = "rejected";
    },
    [deleteuser.rejected]:(state)=>{
      state.status = "pending";
    },
    [updateuser.fulfilled]:(state,action)=>{
      state.status = "fulfilled";
    },
    [updateuser.rejected]:(state)=>{
      state.status = "rejected";
    },
    [updateuser.rejected]:(state)=>{
      state.status = "pending";
    },
  },
});
  

// Action creators are generated for each case reducer function
export const { logout } = UserSlice.actions

export default UserSlice.reducer