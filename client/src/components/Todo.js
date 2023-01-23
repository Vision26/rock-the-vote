import React, { useState, useContext } from 'react'
import { UserContext } from '../context/UserContext'


export default function Todo(props) {
  const { title, description, imgUrl, _id, upvotes, downvotes } = props
  const { updateTodo, user, addComment } = useContext(UserContext)
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

  return (
    <div className="todo">
      <div>
        <h1>{title}</h1>
        <h3>{description}</h3>
        <img src={imgUrl} alt={imgUrl} width={300} />
        <h3>{upvotes.length - downvotes.length}</h3>
        <button onClick={() => updateTodo(_id, { upVoting: true, userId: user._id })}>Upvote</button>
        <button onClick={() => updateTodo(_id, { downVoting: true, userId: user._id })}>Downvote</button>
        <p>{allComment}</p>
        <br />
        <input
          type="text"
          placeholder='Comments'
          name="allComment"
          value={allComment}
          onChange={handleChange}
        />
        <button onClick={() => handleSubmit()}>Submit</button>

      </div>
    </div>
  )
}