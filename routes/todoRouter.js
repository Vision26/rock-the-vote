const express = require("express")
const todoRouter = express.Router()
const Todo = require('../models/todo.js')

// Get All Todos
todoRouter.get("/", (req, res, next) => {
  Todo.find((err, todos) => {
    if (err) {
      res.status(500)
      return next(err)
    }
    return res.status(200).send(todos)
  })
})

// Get todos by user id
todoRouter.get("/:userId", (req, res, next) => {
  Todo.find({ user: req.auth._id }, (err, todos) => {
    if (err) {
      res.status(500)
      return next(err)
    }
    return res.status(200).send(todos)
  })
})

// Add new Todo
todoRouter.post("/", (req, res, next) => {
  req.body.user = req.auth._id
  const newTodo = new Todo(req.body)
  newTodo.save((err, savedTodo) => {
    if (err) {
      res.status(500)
      return next(err)
    }
    return res.status(201).send(savedTodo)
  })
})

//add new comments
// todoRouter.post('/comments', (req, res, next) => {
  // req.body.user = req.auth._id
  // const newComment = new Todo(req.body)
// newComment.save((err, saveComm) => {
  // if(err){
    // res.status(500)
    // return next(err)
  // }
  // return res.status(201).send(saveComm)
// })
// })

// Delete Todo
todoRouter.delete("/:todoId", (req, res, next) => {
  Todo.findOneAndDelete(
    { _id: req.params.todoId, user: req.auth._id },
    (err, deletedTodo) => {
      if (err) {
        res.status(500)
        return next(err)
      }
      return res.status(200).send(`Successfully delete todo: ${deletedTodo}`)
    }
  )
})

// Update Todo
todoRouter.put("/:todoId", async(req, res, next) => {
  const newBody = { ...req.body }
  const currentTodo = await Todo.findOne({ _id: req.params.todoId })
  const votes = { upvotes: [...currentTodo.upvotes], downvotes: [...currentTodo.downvotes] }
  const allComments = { comments: [...currentTodo.comments] }
  if (newBody.upVoting) {
    if (votes.upvotes.includes(newBody.userId)) {
      return
    }
    votes.upvotes.push(newBody.userId)
    votes.downvotes = votes.downvotes.filter(down => down !== newBody.userId)
  }

  if(newBody.downVoting){
    if(votes.downvotes.includes(newBody.userId)){
      return
    }
    votes.downvotes.push(newBody.userId)
    votes.upvotes = votes.upvotes.filter(up => up !== newBody.userId)
  }

  //comments section
// if(newBody.submitComment){
//   if(allComments.comments.includes(newBody.userId)){
//     return
//   }
//   allComments.comments.push(newBody.userId)
// }

  Todo.findOneAndUpdate(
    { _id: req.params.todoId },
    votes,
    { new: true },
    (err, up) => {
      if (err) {
        res.status(500)
        return next(err)
      }
      return res.status(201).send(up)
    }
  )
})




module.exports = todoRouter