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
// const postIssues = newIssue => {
//     userAxios.post('/api/todo', {newIssue})
//     .then(res => setIssueArr(prev => [...prev, res.data]))
//     .catch(err => console.log(err))
// }

    return(
    <IssueContext.Provider value={{
        issueArr,
        // postIssues
    }}>
        {props.children}
        </IssueContext.Provider>)
}

export {IssueProvider, IssueContext}