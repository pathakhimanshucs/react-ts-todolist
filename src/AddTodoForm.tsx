import React, { ChangeEvent, FormEvent, ReactElement, useRef, useState } from "react";

interface Props {
    addTodo: AddTodo;
}

export default function AddTodoForm({ addTodo }: Props): ReactElement {
    const [newTodo, setNewTodo] = useState("");
    
    const todoNameRef = useRef<HTMLInputElement>(null);
    
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTodo(e.target.value);
    };

    const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if(null !== todoNameRef.current){
            todoNameRef.current.value = "";
        }
        addTodo(newTodo);
    };


    return (
        <form className="flex p-4 bg-gray-800 rounded-xl m-5 items-center">
            <button
                className="flex flex-shrink-0 justify-center items-center p-2 mr-5 rounded bg-blue-500 hover:bg-blue-400 border-b-4 border-blue-700 hover:border-blue-500"
                type="submit"
                onClick={handleSubmit}
            >
                <svg
                    className="w-4 h-4 fill-current text-white"
                    viewBox="0 0 448 448"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="m408 184h-136c-4.417969 0-8-3.582031-8-8v-136c0-22.089844-17.910156-40-40-40s-40 17.910156-40 40v136c0 4.417969-3.582031 8-8 8h-136c-22.089844 0-40 17.910156-40 40s17.910156 40 40 40h136c4.417969 0 8 3.582031 8 8v136c0 22.089844 17.910156 40 40 40s40-17.910156 40-40v-136c0-4.417969 3.582031-8 8-8h136c22.089844 0 40-17.910156 40-40s-17.910156-40-40-40zm0 0" />
                </svg>
            </button>
            <input className="bg-transparent border-2 pl-2 rounded text-white font-mono text-xl" ref={todoNameRef} type="text" value={newTodo} onChange={handleChange}/>
        </form>
    );
}
