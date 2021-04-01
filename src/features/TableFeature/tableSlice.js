import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";
import tableApi from "../../api/tableApi";

export const fetchData = createAsyncThunk(
  "table/fetchData",
  async (payload) => {
    //call api to fetchData
    const data = await tableApi.getAll();

    //process data
    var count = 1;
    for (let i of data) {
      i.key = count.toString();
      count++;
      if (i.species.length === 0) {
        i.species = ["No data."];
      }
      if (i.films.length === 0) {
        i.films = ["No data."];
      }
      if (i.vehicles.length === 0) {
        i.vehicles = ["No data."];
      }
      if (i.starships.length === 0) {
        i.starships = ["No data."];
      }
      if (i.url.length === 0) {
        i.url = "No data.";
      }
      if (i.height.length === 0) {
        i.height = "No data.";
      }
      if (i.mass.length === 0) {
        i.mass = "No data.";
      }
      if (i.hair_color.length === 0) {
        i.hair_color = "No data.";
      }
      if (i.skin_color.length === 0) {
        i.skin_color = "No data.";
      }
      if (i.eye_color.length === 0) {
        i.eye_color = "No data.";
      }
      if (i.birth_year.length === 0) {
        i.birth_year = "No data.";
      }
      if (i.gender.length === 0) {
        i.gender = "No data.";
      }
      if (i.homeworld.length === 0) {
        i.homeworld = "No data.";
      }
      if (i.created.length === 0) {
        i.created = "No data.";
      }
      if (i.edited.length === 0) {
        i.edited = "No data.";
      }
    }
    //return data
    return data;
  }
);
const tableSlice = createSlice({
  name: "table",
  initialState: [],
  reducers: {},
  extraReducers: {
    [fetchData.fulfilled]: (state, action) => {
      state.push(action.payload)
     
    },
  },
});

const { reducer } = tableSlice;
export default reducer;
