import React, { useState, useContext, useEffect } from "react"
import { UserContext } from "../../context/UserContext.js"
import Todo from "../Todo.js"
import axios from "axios"
import Comments from "./Comments.js"

function CommentList(props) {
    const { _id } = props
    
    const { addComment, commentState, setCommentState, userAxios} = useContext(UserContext)
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
        addComment(_id, allComment)
        setTodoState({
            allComment: ""
        })
    }

    const getTheComments = () => {
        userAxios.get(`/api/todo/comment/${_id}`)
            .then(res => setCommentState(res.data))
    }

    useEffect(() => {
        getTheComments()
    }, [])

    console.log(commentState)

    return (
        <div>
            {/* {commentState.map(comm => comm.comments.map(com => <h3>{com}</h3>))} */}
            {commentState.map(comm => <Comments {...comm} key={_id}/>)}
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