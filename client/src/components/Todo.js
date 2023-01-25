import React, { useState, useContext } from 'react'
import '../App.css'
import TodoForm from './TodoForm.js'
import {UserContextAuth} from '../context/UserContextAuth.js'

export default function Todo(props) {
    //these props are being grabbed from Profile.js - Todo compo. JSX
const { title, description, imgUrl, _id, upvotes, downvotes, comments, edit, deleteIssue } = props
//sets the on/off button toggle on DOM
const [editToggle, setEditToggle] = useState(false)
//this is grabbing user from userState in UserContextAuth
const {user} = useContext(UserContextAuth)
return(
    <div className='bounty'> 

{/* this adds an open and close feature to posts */}
        {!editToggle ?
        <>
            <img src={imgUrl} alt='images' width={300}/>
            <h2>{title}</h2>
            <h3>{description}</h3>
            <h3>{upvotes.length - downvotes.length}</h3>
            <button onClick={() => edit(_id, {upVoting: true, userId: user._id})}>Upvote</button>
            <button onClick={() => edit(_id, {downVoting: true, userId: user._id})}>Downvote</button>
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