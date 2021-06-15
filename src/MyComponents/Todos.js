import React from "react";
import { TodoItem } from "../MyComponents/TodoItem";

export const Todos = (props) => {
  let myStyle = {
    minHeight: "70vh",
    margin: "10px auto",
  };
  return (
    <div className="container my-3" style={myStyle}>
      <h3 className="my-3 font-weight-italic">To-dos List</h3>
      {props.todos.length === 0 ? (
        <div
          class="alert alert-warning alert-dismissible fade show"
          role="alert"
        >
          <strong>Empty List ..</strong> You should add some to-dos !!!
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      ) : (
        props.todos.map((todo) => {
          return (
            <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
          );
        })
      )}
    </div>
  );
};
