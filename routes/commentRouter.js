const express = require("express")
const commentRouter = express.Router()
const Todo = require('../models/todo.js')
const mongoose = require('mongoose')
// const { populate } = require("../models/todo.js")

//posts comments for every post 
commentRouter.post('/:postId', (req, res, next) => {
    const { newComment } = req.body
    console.log(req)
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

//gets all comments from all users post
commentRouter.get('/comments/:postId', (req, res, next) => {
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
// gets all comments by specific user
commentRouter.get('/specificuser/:userId', (req, res, next) => {
    Todo.find(
        {user: req.auth._id},
        (err, comm) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(comm)
        }
    )
})
//deletes specific comment by specific rndmUser iD
commentRouter.delete('/:rndmId', (req, res, next) => {
    Todo.findOneAndDelete(
        {_id: req.params.rndmId, user: req.auth._id}, 
        (err, del) => {
            if(err){
                res.status(500)
                return next(err)
            }
            res.status(200).send(`Comment Deleted`)
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
