import React, {useState} from 'react'
import axios from "axios"
import CommentList from "./CommentList"
import CommentForm from "./CommentForm"
import Comment from "./Comment"

function CommentSection(props){
  const publicState = {
    comments: [],
    loading: false,
    error:""
  }
  const [state, setPublicState] = useState(publicState)
  const {comments, loading} = state
  
  
  const addComment = comment => {
    axios.post("/api/todos", comment)
    .then(res => setPublicState(prevState => ({
     comments: [...prevState, res.data],
     loading: false
    })))
    .catch(err =>  setPublicState({
      error: "Something went wrong while submitting form.",
      loading: false
    }))
     }
      
      const loadingSpin = loading ? 'App-logo Spin' : 'App-logo'
      console.log(comments)
      return (
    <div className="App container bg-light shadow">
    <header className="App-header">
      {/* <img src={logo} className={loadingSpin} alt="logo" /> */}
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
        {comments.map((comment, index) => (
          // <Comment key={index} comment={comment} />
          console.log(comment)
        ))}
      </div>
      <div className="col-8  pt-3 bg-white">
        <CommentList 
        loading={loading}
        comments={comments}
        />
      </div>
    </div>
  </div>
  )
}

export default CommentSection