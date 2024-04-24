import { configureStore } from "@reduxjs/toolkit";
import switchPageReducer from "../features/switch";

export default configureStore({
  reducer: {
    switchPage: switchPageReducer
  }
});