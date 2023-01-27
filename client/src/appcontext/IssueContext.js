import React, {useState, useEffect, useContext} from 'react'
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
const [issues, setIssues] = useState([])
//*all comments in the API will accessed in this array--**
// const [commentArr, setCommentArr] = useState([])
//axios.get, getting data from api and placing it in issueArr
const getIssues = id => {
    userAxios.get(`/api/todo/${id}`)
    .then(res => setIssues(res.data))
    .catch(err => console.log(err))
}
//using useEffect to access the API using getIssues func.
useEffect(() => {
getIssues()
}, [])
//axios.post - add Issues to the API
const postIssues = newIssue => {
    userAxios.post('/api/todo/newtodo', newIssue)
    .then(res => setIssues(prev => [...prev, res.data]))
    .catch(err => console.log(err))
}
// this will update issue
const updateIssue = (updates, id) => {
    userAxios.put(`/api/todo/edittodo/${id}`, updates)
        .then(res => setIssues(prev => prev.map(prevs => prevs._id !== id ? prevs : res.data)))
        .catch(err => console.log(err))
}

const updateVotes = (id, updates) => {
    userAxios.put(`/api/todo/votes/${id}`, updates)
        .then(res => setIssues(prev => prev.map(prevs => prevs._id !== id ? prevs : res.data)))
        .catch(err => console.log(err))
}
// setSignUp(prev => prev.map(prevs => prevs._id !== updateId ? prevs : res.data) - example 

//this will delete issue
const deleteIssue = id => {
    userAxios.delete(`/api/todo/${id}`)
    .then(res => setIssues(prev => prev.filter(prevs => {
        return prevs._id !== id
    })))
    .catch(err => console.log(err))
}

//*-----ANYTHING BELOW THIS SECTION IS FOR COMMENT SECTION--**

//adds comment
// const getComment = id => {
//     userAxios.get(`/api/comment/comments/${id}`)
//     .then(res => setCommentArr(res.data))
//     .catch(err => console.log(err))
// }


// const addComment = (id, newComment) => {
//     userAxios.post(`/api/todo/comment/${id}`, { newComment })
//         .then(res => setCommentArr(prev => ({
//             commentArr: [...prev, res.data]
//         })))
//         .catch(err => console.log(err))
// }
// console.log(commentArr)
//-----COMMENTSSECTION ABOVE----------*****
    return(
    <IssueContext.Provider value={{
        issues,
        getIssues,
        postIssues,
        updateIssue,
        updateVotes,
        deleteIssue,
        //--anything below is for comment section
        // addComment,
        // getComment,
        // commentArr
    }}>

        {props.children}
        </IssueContext.Provider>)
}

export {IssueProvider, IssueContext}