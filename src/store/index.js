import { configureStore } from "@reduxjs/toolkit";
import toDosSlice from "./todosReducer";

export default configureStore({
  reducer: {
    toDos: toDosSlice,
  },
});
