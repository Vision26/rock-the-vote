import React, {useState, useEffect} from "react"
import axios from 'axios'
const CommContext = React.createContext()
const userAxios = axios.create()
userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})

function CommProvider(props){
//*all comments in the API will accessed in this array--**
const [commentArr, setCommentArr] = useState([])
//gets data from and places it in the arr
const getComment = id => {
    userAxios.get(`/api/todo/comment/specificuser/${id}`)
    .then(res => setCommentArr(res.data))
    .catch(err => console.log(err))
}
//using useEffect to mount the data and place it into an array
useEffect(() => {
getComment()
}, [])
//adds comment
const addComment = (id, newComment) => {
    userAxios.post(`/api/todo/comment/${id}`, {newComment} )
        .then(res => setCommentArr(prev => [...prev, res.data]))
        .catch(err => console.log(err))
}
//edit Comment
const editComment = (id, updateComm) => {
    userAxios.put(`/api/todo/comment/${id}`, updateComm)
    .then(res => setCommentArr(prev => prev.map(prevs => prevs._id !== id ? prevs : res.data)))
}

    return(
        <CommContext.Provider value={{
            addComment,
            getComment,
            commentArr, 
            editComment
            }}>

        {props.children}
        </CommContext.Provider>
    )
}

export {CommProvider, CommContext}