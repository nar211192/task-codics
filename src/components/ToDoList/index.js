import { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import ToDoElement from "../ToDoElement";
import "./style.scss";

const getTodods = (store) => store.toDos;

function ToDoList() {
  const { toDosList } = useSelector(getTodods);
  const [search, setSearch] = useState("");
  const filterArr = useMemo(() => {
    return toDosList.filter((todo) => {
      return todo.name.toLowerCase().includes(search.toLowerCase());
    });
  }, [toDosList, search]);

  return (
    <div className="list-block">
      <div className="search">
        <input
          className="form-control"
          type="text"
          placeholder="Search by name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <ul className="list">
        {filterArr &&
          filterArr.map((todo) => {
            return <li key={todo.id}>
              <ToDoElement todo={todo} />
            </li>;
          })}
      </ul>
    </div>
  );
}

export default ToDoList;
