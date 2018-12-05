import { connect } from "react-redux";
import TodoInput from '../components/TodoInput.js'

const mapDispatchToProps = dispatch => ({
    addNewTodo : newTodo => {
        fetch("http://localhost:8080/api/todos", {method: 'POST', headers: new Headers({
            'Content-Type': 'application/json'
          }), mode: 'cors', body: JSON.stringify({content: newTodo, status: "active"})})
        .then(res => res.json())
        .then(res => {
                console.log(res);
                dispatch({
                    type: "ADD_TODO",
                    payload: res
                });
            }
        )
    }
});


connect(null, mapDispatchToProps)(TodoInput)
export default connect(null, mapDispatchToProps)(TodoInput);
