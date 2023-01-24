import React, { useContext, useEffect } from 'react'
import TodoForm from './TodoForm.js'
import TodoList from './TodoList.js'
import CommentList from './comments/CommentList.js'
import Todo from './Todo.js'
import { UserContext } from '../context/UserContext.js'
import PostPublic from "./PostPublic.js"


export default function Profile() {
  const { user: { username }, addTodo, todos, getUserTodos, commentState } = useContext(UserContext)
  useEffect(() => {
    getUserTodos()
  }, [])
  return (
    <div className="profile">
      <h1>Welcome @{username}!</h1>
      <h3>Add Political Issue</h3>
      <TodoForm addTodo={addTodo} />
      <h3>Your Issues</h3>
      <TodoList todos={todos} />
      {todos.map(to => <CommentList {...to} commentState={commentState} key={to._id} />)}
      <PostPublic todo={todos}/>
    </div>
  )
}