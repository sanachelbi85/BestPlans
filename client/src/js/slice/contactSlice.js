import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from "axios";


export const getcontact = createAsyncThunk("contact/get", async ()=>{
  try {
    let result = await axios.get( "http://localhost:5001/contact/");
    return result;
  } catch (error) {
    console.log(error);
  }
});
export const addcontact = createAsyncThunk("contact/add", async (contact)=>{
  try {
    let result = await axios.post("http://localhost:5001/contact/add", contact);
    return  result;
  } catch (error) {
    console.log(error);
  }
});
export const deletecontact = createAsyncThunk("contact/delete", async (id)=>{
  try {
    let result = await axios.delete(`http://localhost:5001/contact/${id}` );
    return  result;
  } catch (error) {
    console.log(error);
  }
});
export const updatecontact = createAsyncThunk("contact/put", async (id)=>{
  try {
    let result = await axios.put(`http://localhost:5001/contact/${id}` );
    return  result;
  } catch (error) {
    console.log(error);
  }
});


const initialState = {
  contact: null,
  status: null,
}

export const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    logout: (state , action) => {
      state.contact = null;
      localStorage.removeItem("token");
    },
  },
  extraReducers: {
    [getcontact.pending]:(state)=>{
        state.status = "pending";
      },
      [getcontact.fulfilled]:(state,action)=>{
        state.status = "fulfilled";
        state.contact = action.payload.data.contact;
      },
      [getcontact.rejected]:(state)=>{
        state.status = "rejected";
      },
      [addcontact.pending]:(state)=>{
        state.status = "pending";
      },
      [addcontact.fulfilled]:(state)=>{
        state.status = "fulfilled";
      },
      [addcontact.rejected]:(state)=>{
        state.status = "rejected";
      },
      [deletecontact.pending]:(state)=>{
        state.status = "pending";
      },
      [deletecontact.fulfilled]:(state)=>{
        state.status = "fulfilled";
      },
      [deletecontact.rejected]:(state)=>{
        state.status = "rejected";
      },
      [updatecontact.pending]:(state)=>{
        state.status = "pending";
      },
      [updatecontact.fulfilled]:(state)=>{
        state.status = "fulfilled";
    
      },
      [updatecontact.rejected]:(state)=>{
        state.status = "rejected";
      },
  },
});
  

// Action creators are generated for each case reducer function
export const { logout } = contactSlice.actions

export default contactSlice.reducer