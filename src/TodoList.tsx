import React, { ReactElement } from 'react'
import TodoListItem from './TodoListItem'

interface TodoListProps {
    todos: Todo[], 
    toggleTodo: ToggleTodo,
    showHidden: boolean,
}

export default function TodoList({todos, toggleTodo, showHidden}: TodoListProps): ReactElement {
    return (
        <div>
            {todos.filter(todo => {
                if(!showHidden){
                    return todo;
                }else{
                    if(todo.complete){
                        return null;
                    }else{
                        return todo;
                    }
                }
            }).map(todo => {
                    return <TodoListItem key={todo.id} todo={todo} toggleTodo={toggleTodo}/>;
            })
            }
        </div>
    )
}

