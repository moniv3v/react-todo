import { connect } from "react-redux";
import Todos from '../components/Todos.js'

const mapDispatchToProps = dispatch => ({
    checkedItem: ({key, status}) => {
        fetch("http://localhost:8080/api/todos/" + key, {
            mode: 'cors',
            method: 'PATCH',
            body: JSON.stringify({
                status: status == 'completed' ? 'active' : 'completed'
            }),
            headers: new Headers({ 'Content-Type': 'application/json' })
        })
            .then(res => res.json())
            .then(res => {
                dispatch({
                    type: "CHECKED_ITEM",
                    payload: res
                });
            }
        )
    }
});


connect(null, mapDispatchToProps)(Todos)
export default connect(null, mapDispatchToProps)(Todos);
