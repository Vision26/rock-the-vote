import React, {useState, useEffect} from 'react'
import axios from 'axios'
const IssueContext = React.createContext()
const userAxios = axios.create()
userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})

function IssueProvider(props){
    //array where all issues can be accessed
const [issueArr, setIssueArr] = useState([])
//*all comments in the API will accessed in this array--**
const [commentArr, setCommentArr] = useState([])
//axios.get, getting data from api and placing it in issueArr
const getIssues = () => {
    userAxios.get('/api/todo')
    .then(res => setIssueArr(res.data))
    .catch(err => console.log(err))
}
//using useEffect to access the API using getIssues func.
useEffect(() => {
getIssues()
}, [])
//axios.post - add Issues to the API
const postIssues = newIssue => {
    userAxios.post('/api/todo', {newIssue})
    .then(res => setIssueArr(prev => [...prev, res.data]))
    .catch(err => console.log(err))
}
// this will update issue
const updateIssue = (todoId, updates) => {
    userAxios.put(`/api/todo/${todoId}`, updates)
        .then(res => {
            getIssues()
        })
        .catch()
}
//this will delete issue
const deleteIssue = id => {
    userAxios.delete(`/api/todo/${id}`)
    .then(res => setIssueArr(prev => prev.filter(prevs => {
        return prevs._id !== id
    })))
    .catch(err => console.log(err))
}

//*--ANYTHING BELOW THIS SECTION IS FOR COMMENT SECTION--**

//adds comment
const addComment = (id, newComment) => {
    userAxios.post(`/api/todo/comment/${id}`, { newComment })
        .then(res => setCommentArr(res.data))
        .catch(err => console.log(err))
}
//gets comments from specific user--
const getComments = () => {
    userAxios.get('/api/todo/comment')
    .then(res => setCommentArr(res.data))
    .catch(err => console.log(err))
}
useEffect(() => {
getComments()
}, [])
//gets comments from specific user--
// console.log(commentArr)

    return(
    <IssueContext.Provider value={{
        issueArr,
        // postIssues,
        updateIssue,
        deleteIssue,
        //--anything below is for comment section
        addComment,
        commentArr

    }}>
        {props.children}
        </IssueContext.Provider>)
}

export {IssueProvider, IssueContext}