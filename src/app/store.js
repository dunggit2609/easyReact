import { configureStore } from "@reduxjs/toolkit";
import tableReducer from "../features/TableFeature/tableSlice";

const rootReducer = {
  table: tableReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
