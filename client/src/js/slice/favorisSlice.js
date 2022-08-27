import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from "axios";


export const getfavoris = createAsyncThunk("favoris/get", async ()=>{
  try {
    let result = await axios.get( "http://localhost:5001/favoris/");
    return result;
  } catch (error) {
    console.log(error);
  }
});
export const addfavoris = createAsyncThunk("favoris/add", async (favoris)=>{
  try {
    let result = await axios.post("http://localhost:5001/favoris/add", favoris);
    return  result;
  } catch (error) {
    console.log(error);
  }
});
export const deletefavoris = createAsyncThunk("favoris/delete", async (id)=>{
  try {
    let result = await axios.delete(`http://localhost:5001/favoris/${id}` );
    return  result;
  } catch (error) {
    console.log(error);
  }
});
export const updatefavoris = createAsyncThunk("favoris/delete", async (id)=>{
  try {
    let result = await axios.put(`http://localhost:5001/favoris/${id}` );
    return  result;
  } catch (error) {
    console.log(error);
  }
});


const initialState = {
  favoris: null,
  status: null,
}

export const favorisSlice = createSlice({
  name: 'favoris',
  initialState,
  reducers: {
    logout: (state , action) => {
      state.favoris = null;
      localStorage.removeItem("token");
    },
  },
  extraReducers: {
    [getfavoris.pending]:(state)=>{
        state.status = "pending";
      },
      [getfavoris.fulfilled]:(state,action)=>{
        state.status = "fulfilled";
        state.favoris = action.payload.data.favoris;
      },
      [getfavoris.rejected]:(state)=>{
        state.status = "rejected";
      },
      [addfavoris.pending]:(state)=>{
        state.status = "pending";
      },
      [addfavoris.fulfilled]:(state)=>{
        state.status = "fulfilled";
      },
      [addfavoris.rejected]:(state)=>{
        state.status = "rejected";
      },
      [deletefavoris.pending]:(state)=>{
        state.status = "pending";
      },
      [deletefavoris.fulfilled]:(state)=>{
        state.status = "fulfilled";
      },
      [deletefavoris.rejected]:(state)=>{
        state.status = "rejected";
      },
      [updatefavoris.pending]:(state)=>{
        state.status = "pending";
      },
      [updatefavoris.fulfilled]:(state)=>{
        state.status = "fulfilled";
    
      },
      [updatefavoris.rejected]:(state)=>{
        state.status = "rejected";
      },
  },
});
  

// Action creators are generated for each case reducer function
export const { logout } = favorisSlice.actions

export default favorisSlice.reducer