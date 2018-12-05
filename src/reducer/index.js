
const initialState = {
    todos: []
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case "ADD_TODO":
            let newTodos = state.todos.concat(payload);
            return {todos: newTodos};

        default:
            return state
    }
}
