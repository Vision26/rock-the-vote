import React, {useState} from "react"
import axios from "axios"

function CommentForm(props){
const commFormState = {
    loading: false,
    error:"",
    comment:{
        name:"",
        message:""
    }
}
const [state, setState] = useState(commFormState)

//handleChange
const handleFieldChange = e => {
    const {value, name} = e.target
    setState(prevState => ({
        ...prevState, 
        comment:{
            ...state.comment,
            [name]: value
        }
    }))
}

//Form Submit Handler
const onSubmit = e => {
    //preven default
    e.preventDefault()

    if (!isFormValid()) {
        setState({ error: "All fields are required." });
        return;
      }
  
      // loading status and clear error
      setState({ error: "", loading: true });
  
      // persist the comments on server
      let { comment } = state;
    axios.post()
        .then(res => res.json())
        .then(res => {
          if (res.error) {
            this.setState({ loading: false, error: res.error });
          } else {
            // add time return from api and push comment to parent state
            comment.time = res.time;
            this.props.addComment(comment);
  
            // clear the message box
            this.setState({
              loading: false,
              comment: { ...comment, message: "" }
            });
          }
        })
        .catch(err => {
          this.setState({
            error: "Something went wrong while submitting form.",
            loading: false
          });
        });
    }
  
    isFormValid() {
      return state.comment.name !== "" && this.state.comment.message !== "";
    }
}

const renderError = () => {
    return state.error ? (
        <div className="alert alert-danger">{state.error}</div>
    ) : null
}
    return(
<React.Fragment>
        <form method="post" onSubmit={onSubmit}>
          <div className="form-group">
            <input
              onChange={handleFieldChange}
              value={state.comment.name}
              className="form-control"
              placeholder="😎 Your Name"
              name="name"
              type="text"
            />
          </div>

          <div className="form-group">
            <textarea
              onChange={handleFieldChange}
              value={state.comment.message}
              className="form-control"
              placeholder="🤬 Your Comment"
              name="message"
              rows="5"
            />
          </div>

          {renderError()}

          <div className="form-group">
            <button disabled={state.loading} className="btn btn-primary">
              Comment ➤
            </button>
          </div>
        </form>
      </React.Fragment>
    )
}

export default CommentForm