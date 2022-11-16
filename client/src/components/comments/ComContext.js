import React, {useState} from "react"
import axios from "axios"
const ComContext = React.createContext()

function ComProvider(props){
    const publicState = {
        comments: [],
        loading: false
      }
      const [state, setPublicState] = useState(publicState)
      const {comments, loading} = state

      const addComment = comment => {
     axios.post("api/todos", comment)
     .then(res => setPublicState(prevState => [...prevState, res.data]))
      }
      //saving point! continue from here - figure out where to use addComment
      
    //Axios.Get All Comments
      // const getTodos = () => {
  //   axios.get('api/todo')
  // .then(res => setPublicState(res.data))
  // .catch(err => console.log(err))
  // }
  
  // useEffect(() => {
  // getTodos()
  // }, [])

    return(
        <ComContext.Provider value={{comments, loading, addComment}}>
            {props.children}
        </ComContext.Provider>
    )
}

export {ComProvider, ComContext}