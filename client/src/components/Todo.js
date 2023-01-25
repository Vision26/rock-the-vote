import React, { useState } from 'react'
import '../App.css'
import TodoForm from './TodoForm.js'

export default function Todo(props) {
const { title, description, imgUrl, _id, upvotes, downvotes, comments } = props
const [editToggle, setEditToggle] = useState(false)

return(
    <div className='bounty'> 

        {!editToggle ?
        <>
            <img src={imgUrl} alt='images'/>
            <h2>{title}</h2>
            <h3>{description}</h3>
            <button></button>
            <button></button>
            <button className='delete-btn' onClick={() => deleteIssue(_id)}>Delete</button>
            <button className='edit-btn' onClick={() => setEditToggle(prev => !prev)}>Edit</button>
        </>
        :
        <>
        <TodoForm 
        title={title}
        description={description}
        imgUrl={imgUrl}
        id={_id}
        btnText="Submit Edit"
        submit={edit}
        />
        <button onClick={() => setEditToggle(prev => !prev)}>Close</button>
        </>
        }
    </div>
)
}
//-----THIS WILL BE TREATED LIKE BOUNTIES.JS IN BOUNTYHUNTERMONGOOSE----


// import { UserContext } from '../context/UserContext'

//   const { title, description, imgUrl, _id, upvotes, downvotes, allTodos } = props
//   const { updateTodo, user, todos} = useContext(UserContext)
//   return (
//     <div className="todo">
//       <div>
//         {/* <h1>{title}</h1>
//         <h3>{description}</h3>
//         <img src={imgUrl} alt={imgUrl} width={300} />
//         <h3>{upvotes.length - downvotes.length}</h3>
//         <button onClick={() => updateTodo(_id, { upVoting: true, userId: user._id })}>Upvote</button>
//         <button onClick={() => updateTodo(_id, { downVoting: true, userId: user._id })}>Downvote</button> */}
//         {todos.map(to => <CommentList {...to} commentState={commentState} key={to._id} />)}
//       </div>
//     </div>
//   )