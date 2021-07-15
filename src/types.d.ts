type Todo = {
    id: string,
    text: string, 
    complete: boolean
};

type ToggleTodo = (selectedTodo: Todo) => void;
type AddTodo = (todo: string) => void;
type RemoveTodos = () => void;