import React, {useContext} from 'react'
import Todo from './Todo.js'
import TodoForm from './TodoForm.js'
import '../App.css'
import {IssueContext} from '../appcontext/IssueContext.js'

export default function Profile() {
  const {postIssues, issueArr} = useContext(IssueContext)
  
  return(
    <div className='bounty-container'>
      <TodoForm 
      submit={postIssues}
      btnText='Submit'
      />
      {issueArr.map(iss => <Todo 
      key={iss._id}
      {...iss}
      />)}
    </div>
  )
}
//---THIS WILL BE TREATED AS APP.JS LIKE IN BOUNTYHUNTERMONGOOSE./----

// import TodoForm from './TodoForm.js'
// import TodoList from './TodoList.js'
// import CommentList from './comments/CommentList.js'
// import Todo from './Todo.js'
// import { UserContext } from '../context/UserContext.js'
// import PostPublic from "./PostPublic.js"
// import Comments from "./comments/Comments.js"

//   const { user: { username }, addTodo, todos, getUserTodos, commentState, allTodos } = useContext(UserContext)
//   useEffect(() => {
//     getUserTodos()
//   }, [])

//   return (
//     <div className="profile">
//       <h1>Welcome @{username}!</h1>
//       <h3>Add Political Issue</h3>
//       <TodoForm addTodo={addTodo} />
//       <h3>Your Issues</h3>
//       {/* <TodoList todos={todos} /> */}
     
//       {/* <PostPublic allTodos={allTodos}/> */}

//     </div>
//   )