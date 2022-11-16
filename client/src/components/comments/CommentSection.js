import React, {useContext} from 'react'
import { ComContext } from "./ComContext"
import CommentList from "./CommentList"
import CommentForm from "./CommentForm"
import Comment from "./Comment"

function CommentSection(props){
  const {comments, loading, addComment} = useContext(ComContext)
  const loadingSpin = loading ? 'App-logo Spin' : 'App-logo'

  // const getTodos = () => {
  //   axios.get('api/todo')
  // .then(res => setPublicState(res.data))
  // .catch(err => console.log(err))
  // }
  
  // useEffect(() => {
  // getTodos()
  // }, [])

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
          <Comment key={index} comment={comment} />
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