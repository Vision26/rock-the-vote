import React, {useState} from 'react'
// import TodoList from './TodoList.js'
// import Todo from './Todo.js'
import CommentList from "./CommentList"
import CommentForm from "./CommentForm"

function Public(props){
  const publicState = {
    comments: [],
    loading: false
  }
  const [state, setPublicState] = useState(publicState)
  const loadingSpin = state.loading ? 'App-logo Spin' : 'App-logo'

const addComment = comment => {
  setPublicState({
    loading: false,
    comments: [comment, ...state.comments]
  })
}

  return (
    <div className="App container bg-light shadow">
    <header className="App-header">
      <img src={logo} className={loadingSpin} alt="logo" />
      <h1 className="App-title">
        React Comments
        <span className="px-2" role="img" aria-label="Chat">
          💬
        </span>
      </h1>
    </header>

    <div className="row">
      <div className="col-4  pt-3 border-right">
        <h6>Say something about React</h6>
        <CommentForm addComment={addComment} />
        {props.comments.map((comment, index) => (
          <Comment key={index} comment={comment} />
        ))}
      </div>
      <div className="col-8  pt-3 bg-white">
        <CommentList 
        loading={state.loading}
        comments={state.comments}
        />
      </div>
    </div>
  </div>
  )
}

export default Public
//have a way to get all todos regardless of the user for all users to access and comment and vote