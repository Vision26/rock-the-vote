import React, {useContext} from 'react'
import { UserContext } from '../context/UserContext.js'

function Public(props){
const {title} = props
  return (
    <div>
<h1>{title}</h1>
  </div>
  )
}

export default Public
//have a way to get all todos regardless of the user for all users to access and comment and vote