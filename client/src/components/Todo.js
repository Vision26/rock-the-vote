import React, { useState, useContext } from 'react'
import '../App.css'
import TodoForm from './TodoForm.js'
import CommentForm from '../comments/CommentForm'
import { UserContextAuth } from '../context/UserContextAuth.js'

export default function Todo(props) {
    //these props are being grabbed from Profile.js - Todo compo. JSX
    const { getComment,
        commentArr,
        updateVotes,
        getIssues,
        title,
        description,
        imgUrl,
        _id,
        upvotes,
        downvotes,
        edit,
        deleteIssue,
        btnText,
        addComment,
    } = props
    
    //commentArr has been mapped: this destructure items ind.
    // console.log(commentArr)
    //sets the on/off button toggle on DOM
    const [editToggle, setEditToggle] = useState(false)
    //sets on/off toggle for comment
    // const [commToggle, setCommToggle] = useState(false)
    //this is grabbing user from userState in UserContextAuth
    const { user } = useContext(UserContextAuth)
    //---its passing the user._id as an arguement----
    const setIdIssues = () => { getIssues(user._id) }
    //---its passing the user._id as an arguement----

    //its accessing the comments from the comment API
    const seeComments = commentArr.map(see => see.comments.map(se => <ul><li>{se.comment}</li></ul>))
   console.log(commentArr)
//get rndmId from commentArr
// const getRndmId = commentArr.map(rndm => rndm.comments.map(rnd => rnd.rndmUser))
// console.log(getRndmId)
    return (
        <div className='bounty'>

            {/* this adds an open and close feature to posts */}
            {!editToggle ?
                <>

                    <img src={imgUrl} alt='images' width={300} />
                    <h2>{title}</h2>
                    <h3>{description}</h3>
                    <h3>{upvotes.length - downvotes.length}</h3>
                    <button onClick={() => updateVotes(_id, { upVoting: true, userId: user._id })}>Upvote</button>
                    <button onClick={() => updateVotes(_id, { downVoting: true, userId: user._id })}>Downvote</button>
                    <button className='delete-btn' onClick={() => deleteIssue(_id)}>Delete</button>
                    <button className='edit-btn' onClick={() => setEditToggle(prev => !prev)}>Edit</button>
                    {/* <CommentForm
                        key={_id}
                        id={_id}
                        btnText={btnText}
                    /> */}
                </>
                :
                <>
                    <TodoForm
                        key={title}
                        title={title}
                        description={description}
                        imgUrl={imgUrl}
                        id={_id}
                        submit={edit}
                    />
                    <button onClick={() => setEditToggle(prev => !prev)}>Close</button>
                </>
            }
               <CommentForm
                        key={_id}
                        id={_id}
                        btnText={btnText}
                        submitCom={addComment}
                    />
                {seeComments}
                    {/* comments: <ul>
                        <li>{seeComments}</li>
                        </ul> */}
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