import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./style.scss";
import { addToDo } from "../../store/todosReducer";

function ToDoForm() {
  const [disabled, setDisabled] = useState(true);
  const [form, setForm] = useState({
    name: "",
    description: "",
  });

  useEffect(() => {
    if (form.name.trim() && form.description.trim()) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [form]);

  const dispatch = useDispatch();

  const changeHandler = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const clearForm = () => {
    setForm({ name: "", description: "" });
  };

  return (
    <div className="to_do_form">
      <h1>Add ToDo</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addToDo({ ...form, id: Date.now() }));
          clearForm();
        }}
        onReset={clearForm}
      >
        <div className="form-group">
          <input
            onChange={changeHandler}
            type="text"
            className="form-control"
            name="name"
            value={form.name}
            placeholder="Name..."
          />
        </div>
        <div className="form-group">
          <textarea
            onChange={changeHandler}
            className="form-control"
            name="description"
            value={form.description}
            placeholder="Description..."
          />
        </div>

        <button  disabled={disabled} className="btn btn-success" type="sumbit">
          Add
        </button>
        <button className="btn btn-primary" type="reset">
          Reset
        </button>
      </form>
    </div>
  );
}

export default ToDoForm;
