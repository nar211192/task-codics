import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ToDoForm from "../components/ToDoForm";
import ToDoList from "../components/ToDoList";
import { getToDos } from "../store/todosReducer";

function ToDos() {

  return (
    <div className="ToDos">
      <ToDoForm />
      <ToDoList />
    </div>
  );
}

export default ToDos;
