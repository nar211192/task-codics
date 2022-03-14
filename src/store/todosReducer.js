import { createSlice } from "@reduxjs/toolkit";

export const toDosSlice = createSlice({
  name: "todos",
  initialState: {
    toDosList: [],
  },
  reducers: {
    getToDos: (state) => {
      let arr = JSON.parse(localStorage.getItem("todos"));

      if (arr) {
        arr = arr.sort((a, b) => a.name.localeCompare(b.name));
      } else {
        arr = [];
      }

      return {
        ...state,
        toDosList: arr,
      };
    },
    addToDo: (state, action) => {
      localStorage.setItem(
        "todos",
        JSON.stringify([...state.toDosList, action.payload])
      );
      return {
        ...state,
        toDosList: [...state.toDosList, action.payload].sort((a, b) =>
          a.name.localeCompare(b.name)
        ),
      };
    },
    updateToDo: (state, action) => {
      const newArr = state.toDosList.map((item) => {
        if (item.id === action.payload.id) {
          return action.payload;
        }

        return item;
      });
      localStorage.setItem("todos", JSON.stringify(newArr));
      return { ...state, toDosList: newArr };

    },
    deleteToDo: (state, action) => {
      const newArr = state.toDosList.filter(
        (item) => item.id !== action.payload
      );
      localStorage.setItem("todos", JSON.stringify(newArr));
      return { ...state, toDosList: newArr };
    },
  },
});

export const { getToDos, addToDo, updateToDo, deleteToDo } = toDosSlice.actions;

export default toDosSlice.reducer;
