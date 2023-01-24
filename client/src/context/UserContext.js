import React, { useState } from "react"
import axios from "axios"
const UserContext = React.createContext()

const userAxios = axios.create()

userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})

function UserProvider(props) {
    const initState = {
        user: JSON.parse(localStorage.getItem("user")) || {},
        token: localStorage.getItem("token") || "",
        todos: [],
        errMsg:''
    }

    const [userState, setUserState] = useState(initState)

const [ commentState, setCommentState ] = useState({
    getComments: []
})

const {getComments} = commentState

    const signup = credentials => {
        axios.post('/auth/signup', credentials)
            .then(res => {
                const { user, token } = res.data
                //save both token and user in localstorage
                localStorage.setItem("token", token)
                localStorage.setItem("user", JSON.stringify(user))
                setUserState(prev => ({
                    ...prev,
                    user,
                    token
                }))
            })
            .catch(err => handleAuthErr(err.response.data.errMsg))
    }

    const login = credentials => {
        axios.post('/auth/login', credentials)
            .then(res => {
                const { user, token } = res.data
                //save both token and user in localstorage
                localStorage.setItem("token", token)
                localStorage.setItem("user", JSON.stringify(user))
                getUserTodos()
                setUserState(prev => ({
                    ...prev,
                    user,
                    token
                }))
            })
            .catch(err => handleAuthErr(err.response.data.errMsg))
    }

    const logout = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        setUserState({
            user: {},
            token: "",
            todos: []
        })
    }

    const handleAuthErr = errMsg => {
        setUserState(prevState => ({
            ...prevState,
            errMsg
        }))
    }

    const resetAuthErr = () => {
        setUserState(prevState => ({
            ...prevState,
            errMsg:""
        }))
    }

    const getUserTodos = () => {
        userAxios.get('/api/todo/user')
        .then(res => setUserState(prevState => ({
            ...prevState,
            todos: res.data
        })))
        .catch(err => console.log(err.response.data.errMsg))
    }

    const addTodo = newTodo => {
        userAxios.post("/api/todo", newTodo)
        .then(res => setUserState(prevState => ({
            ...prevState,
            todos: [...prevState.todos, res.data]
        })))
        .catch(err => console.log(err.response.data.errMsg))
    }

    const updateTodo = (todoId, updates) => {
        userAxios.put(`/api/todo/${todoId}`, updates)
        .then(res => {
       getUserTodos()
        })
        .catch()
    }

    const getTheComments = () => {
        userAxios.get('/api/todo/comment')
        .then(res => setCommentState(res.data))
    }

    const addComment = (id, newComment) => {
        // console.log(newComment)
        userAxios.post(`/api/todo/comment/${id}`, {newComment})
        .then(res => setCommentState(prevState => ({
            ...prevState,
            getComments: [...prevState.getComments, res.data]
        })))
        .catch(err => console.log(err))
    }
//(two seperate)->arrays for user that have upvote and downvoted
    return (
        <UserContext.Provider value={{ getComments, ...userState, signup, login, logout, addTodo, resetAuthErr, updateTodo, getUserTodos, addComment }}>
            {props.children}
        </UserContext.Provider>
    )
}

export { UserProvider, UserContext }