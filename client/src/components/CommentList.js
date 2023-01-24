import React, {useState, useContext} from "react"
import { UserContext } from "../context/UserContext.js"
import Todo from "./Todo.js"

function CommentList(props) {
    const {comment, id} = props
    const {addComment} = useContext(UserContext)
    const [todoState, setTodoState] = useState({
        allComment: ''
    })
    const { allComment } = todoState

    const handleChange = e => {
        const { name, value } = e.target
        setTodoState(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmit = () => {
        addComment(id, allComment)
        setTodoState({
            allComment: ""
        })
    }

    return (
        <div>
            <p>{comment}</p>
            <input
                type="text"
                placeholder='Comments'
                name="allComment"
                value={allComment}
                onChange={handleChange}
            />
            <button onClick={() => handleSubmit()}>Submit</button>

        </div>
    )
}

export default CommentList