import { connect } from "react-redux";
import TodoFilter from '../components/TodoFilter.js'

const mapDispatchToProps = dispatch => ({
    replaceTodo: showTodo => {
        if (showTodo) {
            console.log('dispatch_true')
            fetch("http://localhost:8080/api/todos/search/statusOfTodos?status=active", {
                method: 'GET', headers: new Headers({
                    'Content-Type': 'application/json'
                }), mode: 'cors'
            })
                .then(res => res.json())
                .then(res => {
                    console.log(res);
                    dispatch({
                        type: "REPLACE_LIST",
                        payload: res._embedded.todos
                    });
                }
                )
        } else {
            console.log('dispatch_false')
            fetch("http://localhost:8080/api/todos/search/statusOfTodos?status=completed,active", {
                method: 'GET', headers: new Headers({
                    'Content-Type': 'application/json'
                }), mode: 'cors'
            })
                .then(res => res.json())
                .then(res => {
                    console.log(res);
                    dispatch({
                        type: "REPLACE_LIST",
                        payload: res._embedded.todos
                    });
                }
                )
        }

    }
});


connect(null, mapDispatchToProps)(TodoFilter)
export default connect(null, mapDispatchToProps)(TodoFilter);
