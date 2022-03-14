import { Button } from "bootstrap";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

function ToDo() {
  const { id } = useParams();
  const { toDosList } = useSelector((store) => store.toDos);

  const todo = useMemo(() => {
    return toDosList.find((item) => item.id === Number(id));
  }, [id, toDosList]);

  return (
    <div>
      {!todo ? (
        <h1>Invalid id</h1>
      ) : (
        <>
          <div class="card">
            <h5 class="card-header">ID: {todo.id}</h5>
            <div class="card-body">
              <h5 class="card-title">{todo.name}</h5>
              <p class="card-text">{todo.description}</p>
              <Link className="btn btn-primary" to="/">
                Go back
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ToDo;
