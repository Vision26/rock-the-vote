import React, { useState, useContext } from 'react'
import { UserContextAuth } from '../context/UserContextAuth.js'

export default function TodoForm(props){
    const { user, commentArr } = useContext(UserContextAuth)
const {username} = user
const {title, description, imgUrl, id, btnText, submit} = props
const [formState, setFormState] = useState({
    title: title || '',
    description: description || '',
    imgUrl: imgUrl || ''
})

//handleChange function
const handleChange = e => {
    const { name, value } = e.target
    setFormState(prev => ({
        ...prev,
        [ name ] : value
    }))
}
//handleSubmit function
const handleSubmit = e => {
    e.preventDefault()
    submit(formState, id)
}
return(
    <div>
         <h1>Welcome @{username}!</h1>
         <h1>I S S U E S</h1>
                    <h3>Add Political Issue</h3>
     <form onSubmit={handleSubmit}>
       <input 
        type="text" 
        name="title" 
        value={formState.title} 
        onChange={handleChange} 
        placeholder="Title"/>
      <input 
        type="text" 
        name="description" 
        value={formState.description} 
        onChange={handleChange} 
        placeholder="Description"/>
      <input 
        type="text" 
        name="imgUrl" 
        value={formState.imgUrl} 
        onChange={handleChange} 
         placeholder="Image Url"/>
       <button className='add-btn'>{btnText}</button>
</form>
    </div>
)
}
//-----THIS WILL BE TREATED LIKE ADDBOUNTY.JS IN BOUNTYHUNTERMONGOOSE----

// const initInputs = {
//   title: "",
//   description: "",
//   imgUrl: "",
  
// }

//   const [inputs, setInputs] = useState(initInputs)
// const { addTodo } = props
//   function handleChange(e){
//     const {name, value} = e.target
//     setInputs(prevInputs => ({
//       ...prevInputs,
//       [name]: value
//     }))
//   }

//   function handleSubmit(e){
//     e.preventDefault()
//     // add todo
//     addTodo(inputs)
//     setInputs(initInputs)
//   }



//   const { title, description, imgUrl } = inputs
//   return (
    //<h1>I S S U E S</h1>
//     <form onSubmit={handleSubmit}>
//       <input 
//         type="text" 
//         name="title" 
//         value={title} 
//         onChange={handleChange} 
//         placeholder="Title"/>
//       <input 
//         type="text" 
//         name="description" 
//         value={description} 
//         onChange={handleChange} 
//         placeholder="Description"/>
//       <input 
//         type="text" 
//         name="imgUrl" 
//         value={imgUrl} 
//         onChange={handleChange} 
//         placeholder="Image Url"/>
//       <button>Add</button>

      
//     </form>
//   )
//-----THIS WILL BE TREATED LIKE ADDBOUNTY.JS IN BOUNTYHUNTERMONGOOSE----