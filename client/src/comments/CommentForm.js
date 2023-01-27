import React, { useState, useContext } from 'react'
import { CommContext } from '../commcontext/CommContext'
import { UserContextAuth } from '../context/UserContextAuth'

function CommentForm(props) {
    //get commcontext props
    const { getComment } = useContext(CommContext)
    //get usercontextauth props
    const { user } = useContext(UserContextAuth)
    //---its passing the user._id as an arguement----
    const setIdfrGetComm = () => { getComment() }
    //grabbing props
    const { submitCom, btnText, comments, title, description, imgUrl, id } = props
    const [state, setState] = useState({
        inputComment: ""
    })
    const { inputComment } = state
    //handleChange
    const commentHandleChange = e => {
        const { name, value } = e.target
        setState(prevState => ({
            ...prevState,
            [name]: value
        }))
    }
    // handleSubmit
    const commentHandleSubmit = e => {
        e.preventDefault()
        submitCom(user._id, inputComment)
        // setCommentState({
        //     inputComment: ""
        // })
    }
    return (
        <div>
            <form onSubmit={commentHandleSubmit}>
                <textarea
                    placeholder="Type Comment..."
                    type="text"
                    name="inputComment"
                    value={inputComment}
                    onChange={commentHandleChange}
                     />
                     <hr/>
                <button>Submit Comment</button>
            </form>
            {/* <form onSubmit={commentHandleSubmit}>
              <input 
              type="text"
              placeholder="Type Comment"
              name="inputComment"
              value={inputComment}
              onChange={commentHandleChange}
              />
                <button >{btnText}</button>
            </form> */}

        </div>
    )
}

export default CommentForm

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