import React from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import CurrentTime from "../components/CurrentTime";
import NavItems from "../components/NavItems";
import TodoHeadline from "../components/TodoHeadline";

const AddTodo = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const navigate = useNavigate();

  const addTodo = () => {
    // Axios.post("http://localhost:3001/addtodo", { title: title, desc: desc }).then(navigate("/"));
    // Axios.post("http://192.168.0.106:3001/addtodo", { title: title, desc: desc }).then(navigate("/"));
    Axios.post("https://whattodo-todoapp.herokuapp.com/addtodo", { title: title, desc: desc }).then(navigate("/"));
  };

  return (
    <div className="App-Main font-inter bg-gradient-to-br from-gray-800 via-gray-900 to-black">
      <div className="max-w-2xl min-h-screen m-auto py-8 px-8">
        <NavItems />
        <div className="hero text-white flex flex-col items-center justify-center ">
          <TodoHeadline heading="Add To Do" />
          <div className="Todo-List border  flex flex-col border-gray-600 rounded-3xl px-4 py-2 mt-8 mb-4">
            <input required="true" onChange={(e) => setTitle(e.target.value)} type="text" className="my-4 border-none outline-none focus:bg-gray-700 transition bg-gray-500 rounded-xl px-4 py-3" placeholder="To Do Title" />
            <textarea onChange={(e) => setDesc(e.target.value)} cols="30" rows="10" className="mb-2 border-none outline-none focus:bg-gray-700 transition bg-gray-500 rounded-xl px-4 py-3" placeholder="Briefly describe your To Do here..." />
            <CurrentTime />
          </div>
          <div>
            <button onClick={addTodo} className="border border-gray-400 rounded-lg py-1 px-4 hover:bg-white hover:text-black transition">
              + Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
