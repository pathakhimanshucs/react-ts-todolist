import React, { ReactElement } from "react";
import "./TodoListItem.css";

interface TodoListItemProps {
    todo: Todo;
    toggleTodo: ToggleTodo;
}

export default function TodoListItem({
    todo,
    toggleTodo,
}: TodoListItemProps): ReactElement {
    const completed = todo.complete ? "complete" : undefined;
    return (
        <div className="flex bg-gray-800 rounded-xl m-5 items-center">
            <label className={`m-5 ${completed}`}>
                <input
                    id="A3-yes"
                    className="opacity-0 absolute h-8 w-8"
                    type="checkbox"
                    checked={todo.complete}
                    onChange={() => toggleTodo(todo)}
                />
                <div className="border-4 rounded-md border-blue-600 w-8 h-8 flex flex-shrink-0 justify-center items-center focus-within:border-blue-500">
                    <svg
                        className="fill-current hidden w-4 h-4 text-blue-600 pointer-events-none"
                        version="1.1"
                        viewBox="0 0 17 12"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g fill="none" fill-rule="evenodd">
                            <g
                                transform="translate(-9 -11)"
                                fill="#1F73F1"
                                fill-rule="nonzero"
                            >
                                <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />
                            </g>
                        </g>
                    </svg>
                </div>
            </label>
            <span className={`text-white font-mono text-xl ${completed}`}>
                {todo.text}
            </span>
        </div>
    );
}
