// import React, { useContext } from "react"
// import Todo from "../Todo.js"
// import { UserContext } from "../../context/UserContext"

// function Comments(props) {
//     const {commentState} = useContext(UserContext)
//     const { comments,
//         title,
//         description,
//         imgUrl,
//         _id,
//         upvotes,
//         downvotes,
//         updateTodo,
//         user } = props
//     // const showComms = comments.map(show => show.comment)
//     return (
//         <div>
//             <h1>{title}</h1>
//             <h3>{description}</h3>
//             <img src={imgUrl} alt={imgUrl} width={300} />
//             <h3>{upvotes.length - downvotes.length}</h3>
//             <button onClick={() => updateTodo(_id, { upVoting: true, userId: user._id })}>Upvote</button>
//             <button onClick={() => updateTodo(_id, { downVoting: true, userId: user._id })}>Downvote</button>
//             {/* <h3>{showComms}</h3> */}
//         </div>
//     )
// }


// export default Comments