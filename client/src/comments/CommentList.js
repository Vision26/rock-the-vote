// import React, { useState, useContext, useEffect } from "react"
// import { UserContext } from "../../context/UserContext.js"
// import Comments from "./Comments.js"

// function CommentList(props) {
//     const { _id, title, description, imgUrl } = props
//     const { addComment, commentState, setCommentState, userAxios, updateTodo, user} = useContext(UserContext)

//     const [todoState, setTodoState] = useState({
//         allComment: ''
//     })
//     const { allComment } = todoState

//     const handleChange = e => {
//         const { name, value } = e.target
//         setTodoState(prevState => ({
//             ...prevState,
//             [name]: value
//         }))
//     }

//     const handleSubmit = () => {
//         addComment(_id, allComment)
//         setTodoState({
//             allComment: ""
//         })
//     }

//     const getTheComments = () => {
//         userAxios.get(`/api/todo/comment/${_id}`)
//             .then(res => setCommentState(res.data))
//     }

//     useEffect(() => {
//         getTheComments()
//     }, [])

//     return (
//         <div>
//             {commentState.map(comm =>
//                  <Comments {...comm} 
//                  title={title}
//                  description={description}
//                  imgUrl={imgUrl}
//                  updateTodo={updateTodo}
//                  user={user}
//                 />)}

//             <input
//                 type="text"
//                 placeholder='Comments'
//                 name="allComment"
//                 value={allComment}
//                 onChange={handleChange}
//             />
//             <button onClick={() => handleSubmit()}>Submit</button>

//         </div>
//     )
// }

// export default CommentList