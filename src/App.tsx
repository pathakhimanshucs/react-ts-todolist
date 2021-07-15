import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";

import "./index.css";

const initialTodos: Array<Todo> = [
  { id: "1", text: "Todo 1", complete: true },
  { id: "2", text: "Todo 2", complete: false },
];

const LOCAL_TODOS_KEY = "TODOS";
function App() {
  const [todos, setTodos] = useState(initialTodos);

  const [hideToggle, setHideToggle] = useState(false);

  //Persistance
  //Retrieve
  useEffect(() => {
    const todos = localStorage.getItem(LOCAL_TODOS_KEY);
    if (todos) {
      setTodos(JSON.parse(todos));
    }
  }, []);

  //Save
  useEffect(() => {
    localStorage.setItem(LOCAL_TODOS_KEY, JSON.stringify(todos));
  }, [todos]);

  const toggleTodo: ToggleTodo = (selectedTodo) => {
    const newTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const addTodo: AddTodo = (newTask) => {
    const newTodo: Todo = { id: uuidv4(), text: newTask, complete: false };
    newTodo.text.trim() !== "" && setTodos([...todos, newTodo]);
  };

  const removeTodos: RemoveTodos = () => {
    const newTodos = todos.filter((todo) => !todo.complete);
    setTodos(newTodos);
  };

  return (
    <>
      <div className="flex flex-col flex-auto">
        <div className="flex justify-center mt-10 text-white text-6xl font-mono font-black">
            <div className={"text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-500"}>TODOS</div>
        </div>
        <div className="flex-inital p-6 w-1/3 mt-10 m-auto bg-gray-900 rounded-xl shadow-md items-center object-center">
          <React.Fragment>
            <TodoList
              todos={todos}
              toggleTodo={toggleTodo}
              showHidden={hideToggle}
            />
            <AddTodoForm addTodo={addTodo} />
          </React.Fragment>
          <div className={"flex flex-col text-white items-end mr-5"}>
            <div className={"flex-initial"}>
              <button
                className={
                  "bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
                }
                onClick={() => removeTodos()}
              >
                Remove Completed
              </button>
            </div>
            <div className={"flex flex-shrink-0 justify-center items-center"}>
              <div>
                <input
                  id="hide-yes"
                  className="opacity-0 absolute h-8 w-8"
                  type="checkbox"
                  checked={hideToggle}
                  onChange={() => setHideToggle(!hideToggle)}
                />
                <div className="border-4 rounded-md border-red-600 w-8 h-8 flex flex-shrink-0 justify-center items-center focus-within:border-red-500 mr-4">
                  <svg
                    className="fill-current hidden w-4 h-4 text-red-600 pointer-events-none"
                    version="1.1"
                    viewBox="0 0 17 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fill="none" fill-rule="evenodd">
                      <g
                        transform="translate(-9 -11)"
                        fill="#DC2626"
                        fill-rule="nonzero"
                      >
                        <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
              Hide Completed Todos
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
