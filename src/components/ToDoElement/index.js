import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteToDo, updateToDo } from "../../store/todosReducer";
import "./style.scss";

const style = {
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
};

function ToDoElement({ todo }) {
  const [state, setState] = useState(todo);
  const [isEdit, setIsEdit] = useState(false);
  const disptach = useDispatch();

  const changeHandler = (e) => {
    setState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const editToDo = () => {
    if (!isEdit) {
      return setIsEdit(true);
    }

    disptach(updateToDo(state));
    setIsEdit(false);
  };

  return (
    <div className="todo-item">
      <div className="todo-name" style={!isEdit ? style : null}>
        {isEdit ? (
          <>
            <input
              className="form-control"
              type="text"
              name="name"
              value={state.name}
              onChange={changeHandler}
            />
            <textarea
              className="form-control"
              name="description"
              value={state.description}
              onChange={changeHandler}
            />
          </>
        ) : (
          <Link to={'todo/' + state.id}>{state.name}</Link> 
        )}
      </div>

      <div className="actions">
        <button className="btn btn-primary" onClick={editToDo}>
          {isEdit ? "Save" : "Edit"}
        </button>
        <button
          className={isEdit ? "btn btn-info" : "btn btn-danger"}
          onClick={() => {
            if (isEdit) {
              setState(todo);
              setIsEdit(false);
            } else {
              disptach(deleteToDo(state.id));
            }
          }}
        >
          {isEdit ? "Cancel" : "Delete"}
        </button>
      </div>
    </div>
  );
}

export default ToDoElement;
