import React from "react";
import NavItems from "./components/NavItems";
import TodoCard from "./components/TodoCard";
import TodoHeadline from "./components/TodoHeadline";
import Axios from "axios";
import "./index.css";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    getTodoList();
  }, []);

  const getTodoList = () => {
    Axios.get("https://whattodo-todoapp.herokuapp.com/gettodo").then((response) => {
      setTodoList(response.data);
    });
    // Axios.get("http://192.168.0.106:3001/gettodo").then((response) => {
    //   setTodoList(response.data);
    // });
  };

  return (
    <div className="App-Main font-inter bg-gradient-to-br from-gray-800 via-gray-900 to-black">
      <div className="max-w-2xl min-h-screen m-auto py-8 px-8">
        <NavItems />
        <div className="hero flex flex-col items-center justify-center ">
          <TodoHeadline heading="To Do List" />
          <div className="Todo-List border border-gray-600 min-w-full rounded-3xl px-4 py-2 mt-8 mb-4">
            {todoList.length > 0 ? (
              todoList.map((todo) => {
                return <TodoCard id={todo.id} title={todo.title} description={todo.description} added_at={todo.added_at} />;
              })
            ) : (
              <p className="text-center text-gray-500 text-md  py-6">Create a new To Do using the plus icon at the top right corner.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
