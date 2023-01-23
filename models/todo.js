const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentSchema = new Schema({
  comment:{
    type: String,
    required: true
  },
  rndmUser:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  }
})

const todoSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  completed: {
    type: Boolean,
    default: false
  },
  imgUrl: {
    type: String,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  upvotes:{
    type: Array
  },
  downvotes:{
    type: Array
  },
  comments:[ commentSchema ]
})
//upvotes downvotes change number to array
const Comment = mongoose.model("Comment", commentSchema)
const Todo = mongoose.model("Todo", todoSchema)
module.exports = (Comment, Todo)