const express = require("express")
const commentRouter = express.Router()
const Todo = require('../models/todo.js')
const mongoose = require('mongoose')
// const { populate } = require("../models/todo.js")

commentRouter.post('/:postId', (req, res, next) => {
    const { newComment } = req.body
    // console.log(req)
    Todo.findOneAndUpdate(
        { _id: req.params.postId, user: req.auth._id },
        { $addToSet: { comments: { comment: newComment, rndmUser: mongoose.Types.ObjectId(req.auth._id) } } },
        { new: true }
    ).populate("comments").exec((err, populatedPost) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(populatedPost)
    })
})

commentRouter.get('/:postId', (req, res, next) => {
    Todo.find(
        {_id: req.params.postId},
        (err, comms) => {
        if (err) {
            res.status(500)
            return next(err)
          }
          return res.status(200).send(comms)
    })
})

commentRouter.delete('/:postId', (req, res, next) => {
    Todo.findOneAndDelete(
        {_id: req.params.postId}, 
        (err, del) => {
            if(err){
                res.status(500)
                return next(err)
            }
            res.status(200).send(`${del} Deleted`)
    })
})

module.exports = commentRouter
  



// Post.find()
//   .populate({
//     path: 'comments',
//     populate: {
//       path: 'author',
//       model: 'User'
//     }
//   })

// Todo.findByIdAndUpdate(
//     { _id: req.params.postId, user: req.auth._id },
//     { $addToSet: { comments:{ comment: newComment.comment, author: mongoose.Types.ObjectId(req.auth._id)}} },
//     { new: true }
//     )
