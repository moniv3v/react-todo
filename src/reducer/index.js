
const initialState = {
    todos: []
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case "ADD_TODO":
            let newTodos = state.todos.concat(payload);
            return {todos: newTodos};

        case "CHECKED_ITEM":
            newTodos = state.todos.map(todo => {
                if (todo.id === payload.id) {
                    return payload;
                } else {
                    return todo;
                }
            });

            console.log(payload);
            return {todos: newTodos};

        default:
            return state
    }
}
