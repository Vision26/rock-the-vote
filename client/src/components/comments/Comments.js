import React,{useContext} from "react"
import Todo from "../Todo.js"
// import { UserContext } from "../../context/UserContext"

function Comments(props){
// const {commentState} = useContext(UserContext)
const {comments} = props
const showComms = comments.map(show => show.comment)
    return(
        <div>
            <h3>{showComms}</h3>
        </div>
    )
}


export default Comments