import React, { useState, useContext } from 'react'
import { UserContext } from '../context/UserContext'
import CommentList from './CommentList.js'


export default function Todo(props) {
  const { title, description, imgUrl, _id, upvotes, downvotes, comments } = props
  const { updateTodo, user, getComments } = useContext(UserContext)
  console.log(getComments)
  return (
    <div className="todo">
      <div>
        <h1>{title}</h1>
        <h3>{description}</h3>
        <img src={imgUrl} alt={imgUrl} width={300} />
        {/* <h3>{comments}</h3> */}
        <h3>{upvotes.length - downvotes.length}</h3>
        <button onClick={() => updateTodo(_id, { upVoting: true, userId: user._id })}>Upvote</button>
        <button onClick={() => updateTodo(_id, { downVoting: true, userId: user._id })}>Downvote</button>
        {getComments.map(getComment => <CommentList {...getComment} id={_id} key={getComment._id} />)}
      </div>
    </div>
  )
}