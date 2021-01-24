import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions";

export const AddTodo = () => {
  const dispatch = useDispatch();

  const [author, setAuthor] = useState("");
  const [todo, setTodo] = useState("");

  return (
    <div>
      <p>Author</p>
      <input
        onChange={(e) => setAuthor(e.target.value)}
        value={author}
      />
      <p>Todo</p>
      <input
        onChange={(e) => setTodo(e.target.value)}
        value={todo}
      />
      <br />
      <button className="add-todo" onClick={() => { dispatch(addTodo({inputName: todo, inputAuthor: author})) }}>
        Add Todo
      </button>
    </div>
  );
}
