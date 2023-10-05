import React from "react";
import { useState } from "react";
import { addTodo, changeText, updateTodo } from "../features/todo/todoSlice";
import { useDispatch, useSelector } from "react-redux";

function AddTodo() {
  const [input, setInput] = useState("")

  const dispatch = useDispatch();

  const btnText = useSelector(state => state.btnText)
const id = useSelector(state=>state.selectId)

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput('')
    console.log("add")

  };

  const handleUpdate = (e) => {
      e.preventDefault()
    dispatch(updateTodo({id, input}))
    setInput('')
    dispatch(changeText('AddTodo'))
    console.log("this is id" , id)
  }

  

  return (
    <form onSubmit={ btnText === "AddTodo" ? addTodoHandler : handleUpdate} className="space-x-3 mt-12">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
        {btnText === 'AddTodo' ? <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        AddTodo
      </button> :<button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        updateTodo
      </button>}
    </form>
  );
}

export default AddTodo;
