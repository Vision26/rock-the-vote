import React, { useState } from 'react'

export default function TodoForm(props){

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