import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Fetch data from server
// eslint-disable-next-line react-refresh/only-export-components
export const fetchData = createAsyncThunk("api", async () => {
  let response = await axios.get("http://localhost:5000/data");
  return response.data;
});

// Add data to server
// eslint-disable-next-line react-refresh/only-export-components
export const addDataToServer = createAsyncThunk("addData", async (newProduct) => {
  let response = await axios.post("http://localhost:5000/data", newProduct);
  return response.data;  // Return the added product
});

// Update data on server
// eslint-disable-next-line react-refresh/only-export-components
export const updateDataOnServer = createAsyncThunk("updateData", async (updatedProduct) => {
  let response = await axios.put(`http://localhost:5000/data/${updatedProduct.id}`, updatedProduct);
  return response.data;  // Return the updated product
});

// Delete data from server
// eslint-disable-next-line react-refresh/only-export-components
export const deleteDataFromServer = createAsyncThunk("deleteData", async (id) => {
  await axios.delete(`http://localhost:5000/data/${id}`);  // Send DELETE request to JSON server
  return id;  // Return the id to remove from the state
});

export const List = createSlice({
  name: "List",
  initialState: {
    Data: [],
    loading: true,
  },
  reducers: {
    AddData: (state, action) => {
      state.Data.push(action.payload);
    },
    DeleteData: (state, action) => {
      const id = action.payload;
      const deleteRec = state.Data.filter((e) => e.id !== id);
      state.Data = deleteRec;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.Data = action.payload;
      })
      .addCase(addDataToServer.fulfilled, (state, action) => {
        state.Data.push(action.payload);  // Add the new product to state
      })
      .addCase(updateDataOnServer.fulfilled, (state, action) => {
        // Update the state with the updated product
        const index = state.Data.findIndex((item) => item.id === action.payload.id);
        if (index !== -1) {
          state.Data[index] = action.payload;
        }
      })
      .addCase(deleteDataFromServer.fulfilled, (state, action) => {
        const id = action.payload;
        state.Data = state.Data.filter((item) => item.id !== id);
      });
  },
});

// eslint-disable-next-line react-refresh/only-export-components
export const { AddData, DeleteData } = List.actions;
export default List.reducer;
