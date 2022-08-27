import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from "axios";


export const getdestination = createAsyncThunk("destination/get", async ()=>{
  try {
    let result = await axios.get( "http://localhost:5001/destination/");
    return result;
  } catch (error) {
    console.log(error);
  }
});
export const adddestination = createAsyncThunk("destination/add", async (dest)=>{
  try {
    let result = await axios.post("http://localhost:5001/destination/", dest);
    return  result;
  } catch (error) {
    console.log(error);
  }
});
export const deletedestination = createAsyncThunk("destination/delete", async (id)=>{
  try {
    let result = await axios.delete(`http://localhost:5001/destination/${id}` );
    return  result;
  } catch (error) {
    console.log(error);
  }
});
export const updatedestination = createAsyncThunk("destination/update", async ({id, edit})=>{
  try {
    let result = await axios.put(`http://localhost:5001/destination/${id}`, edit );
    return  result;
  } catch (error) {
    console.log(error);
  }
});


const initialState = {
  destinations: null,
  status: null,
}

export const destinationSlice = createSlice({
  name: 'destination',
  initialState,
  reducers: {
    logout: (state , action) => {
      state.destination = null;
      localStorage.removeItem("token");
    },
  },
  extraReducers: {
    [getdestination.pending]:(state)=>{
        state.status = "pending";
      },
      [getdestination.fulfilled]:(state,action)=>{
        state.status = "fulfilled";
        state.destinations = action.payload.data.destination;
      },
      [getdestination.rejected]:(state)=>{
        state.status = "rejected";
      },
      [adddestination.pending]:(state)=>{
        state.status = "pending";
      },
      [adddestination.fulfilled]:(state)=>{
        state.status = "fulfilled";
      },
      [adddestination.rejected]:(state)=>{
        state.status = "rejected";
      },
      [deletedestination.pending]:(state)=>{
        state.status = "pending";
      },
      [deletedestination.fulfilled]:(state)=>{
        state.status = "fulfilled";
      },
      [deletedestination.rejected]:(state)=>{
        state.status = "rejected";
      },
      [updatedestination.pending]:(state)=>{
        state.status = "pending";
      },
      [updatedestination.fulfilled]:(state)=>{
        state.status = "fulfilled";
    
      },
      [updatedestination.rejected]:(state)=>{
        state.status = "rejected";
      },
  },
});
  

// Action creators are generated for each case reducer function
export const { logout } = destinationSlice.actions

export default destinationSlice.reducer