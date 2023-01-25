import React, { useState, useEffect } from "react"
import axios from "axios"
const UserContextAuth = React.createContext()

const userAxios = axios.create()

userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})

function UserProviderAuth(props) {
    const initState = {
        user: JSON.parse(localStorage.getItem("user")) || {},
        token: localStorage.getItem("token") || "",
        errMsg: ''
    }

    const [userState, setUserState] = useState(initState)
    const {user, token, errMsg} = userState
    // const [commentState, setCommentState] = useState([])

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

const getUserTodos = () => {
    userAxios.get('/api/todo/user')
        .then(res => setUserState(prevState => ({
            ...prevState,
            todos: res.data
        })))
        .catch(err => console.log(err.response.data.errMsg))
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
            errMsg: ""
        }))
    }


    return (
        <UserContextAuth.Provider value={{
            // userAxios,
            // commentState,
            // setCommentState,
            ...userState,
            signup,
            login,
            logout,
            // addTodo,
            resetAuthErr
            // updateTodo,
            // getUserTodos,
            // addComment
        }}>
            {props.children}
        </UserContextAuth.Provider>
    )
}

export { UserProviderAuth, UserContextAuth }

// const getUserTodos = () => {
//     userAxios.get('/api/todo/user')
//         .then(res => setUserState(prevState => ({
//             ...prevState,
//             todos: res.data
//         })))
//         .catch(err => console.log(err.response.data.errMsg))
// }

// const getAllTodos = () => {
//     userAxios.get('/api/todo')
//         .then(res => setUserState(prevState => ({
//             ...prevState,
//             allTodos: res.data
//         })))
//         .catch(err => console.log)
// }

// const addTodo = newTodo => {
//     userAxios.post("/api/todo", newTodo)
//         .then(res => setUserState(prevState => ({
//             ...prevState,
//             todos: [...prevState.todos, res.data]
//         })))
//         .catch(err => console.log(err.response.data.errMsg))
// }

// const updateTodo = (todoId, updates) => {
//     userAxios.put(`/api/todo/${todoId}`, updates)
//         .then(res => {
//             getUserTodos()
//         })
//         .catch()
// }

// const addComment = (id, newComment) => {
//     userAxios.post(`/api/todo/comment/${id}`, { newComment })
//         .then(res => setCommentState(res.data))
//         .catch(err => console.log(err))
// }