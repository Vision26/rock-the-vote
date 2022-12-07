import React, { useState } from "react"
import axios from "axios"

function CommentForm(props) {
  const commFormState = {
    loading: false,
    error: "",
    comment:{
      name:"",
      message:""
    }
  }
  
  const [frmState, setFrmComment] = useState(commFormState)
  const {name, message} = frmState.comment
  const {loading, error}  = frmState

  const {addComment} = props


  //handleChange
  const handleFieldChange = e => {
    const { value, name } = e.target
    setFrmComment(prevState => ({
      comment:{
        ...prevState,
        [name]: value
      }
    }))
  }

  //place this last inside the onSubmit function
  // const isFormValid = () => {
  //   return state.comment.name !== "" && state.comment.message !== "";
  // }
 

  const isFormValid = () => {
    return name !== "" && message !== "";
  }


  //Form Submit Handler
  const onSubmit = e => {
    //preven default
    e.preventDefault()

    if (!isFormValid()) {
      setFrmComment({ error: "All fields are required." });
      return;
    }

    // loading status and clear error
    setFrmComment({ error: "", loading: true });
//saving point: figure out how to post 
    // persist the comments on server
        if (error) {
          setFrmComment({ loading: false, error: error });
        } else {
          // add time return from api and push comment to parent state
          addComment(frmState.comment);

          // clear the message box
          setFrmComment({
            loading: false,
            comment: { ...frmState.comment, message: "" }
          });
        }
  
    isFormValid()
  }

  const renderError = () => {
    return error ? (
      <div className="alert alert-danger">{error}</div>
    ) : null
  }

  return (

    <form method="post" onSubmit={onSubmit}>
      <div className="form-group">
        <input
          onChange={handleFieldChange}
          value={name}
          className="form-control"
          placeholder="😎 Your Name"
          name="name"
          type="text"
        />
      </div>

      <div className="form-group">
        <textarea
          onChange={handleFieldChange}
          value={message}
          className="form-control"
          placeholder="🤬 Your Comment"
          name="message"
          rows="5"
        />
      </div>

      {renderError()}

      <div className="form-group">
        <button disabled={loading} className="btn btn-primary">
          Comment ➤
        </button>
      </div>
    </form>

  )
}

export default CommentForm