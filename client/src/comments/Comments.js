// import React, {useState, useContext, useEffect} from 'react'
// import '../App.css'
// import CommentForm from './CommentForm'
// import { UserContextAuth } from '../context/UserContextAuth.js'
// import { IssueContext } from '../appcontext/IssueContext'

// function Comments(props){
//     const {getComment, comments, edit} = props
//     // console.log(comments)
//     // const {commentArr} = useContext(IssueContext)
//     // console.log(commentArr)
//     const { user } = useContext(UserContextAuth)
//         //---its passing the user._id as an arguement----
//     const setIdfrGetComm = () => { getComment(user._id) }
//         //---its passing the user._id as an arguement----
//         //open and close out feature for comment
//     const [toggle, setToggle] = useState(false)

//     return(
//         <div className='bounty-comment'>
//                         {/* this adds an open and close feature to posts */}
//             {!toggle ?
//             <>
//             {/* {comments.map(comms => {<p>{comms.comment}</p>})} */}
//             <button className='edit-btn-comment' onClick={() => setToggle(prev => !prev)}>Edit Comment</button>
//             </>
//             :
//             <>
//             {comments.map(com => <CommentForm 
//             key={com._id}
//             {...com}
//             btnTextComm='Submit Edit'
//             submit={edit}
//             />)}
//             <button onClick={() => setToggle(prev => !prev)}>Close</button>
//             </>
//             }
//         </div>
//     )
// }

// export default Comments


// // import React, { useContext } from "react"
// // import Todo from "../Todo.js"
// // import { UserContext } from "../../context/UserContext"

// // function Comments(props) {
// //     const {commentState} = useContext(UserContext)
// //     const { comments,
// //         title,
// //         description,
// //         imgUrl,
// //         _id,
// //         upvotes,
// //         downvotes,
// //         updateTodo,
// //         user } = props
// //     // const showComms = comments.map(show => show.comment)
// //     return (
// //         <div>
// //             <h1>{title}</h1>
// //             <h3>{description}</h3>
// //             <img src={imgUrl} alt={imgUrl} width={300} />
// //             <h3>{upvotes.length - downvotes.length}</h3>
// //             <button onClick={() => updateTodo(_id, { upVoting: true, userId: user._id })}>Upvote</button>
// //             <button onClick={() => updateTodo(_id, { downVoting: true, userId: user._id })}>Downvote</button>
// //             {/* <h3>{showComms}</h3> */}
// //         </div>
// //     )
// // }


// // export default Comments