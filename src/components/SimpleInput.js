import React, { useRef, useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('')
  const nameInputRef = useRef()

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value)
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault()
    console.log(enteredName)

    const enteredNameValue = nameInputRef.current.value
    console.log(enteredNameValue)

    // nameInputRef.current.value = '' //don't do this, not ideal, do not manipulate the real DOM
    setEnteredName('')
  }

  return(
    <form onSubmit={formSubmissionHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" onChange={nameInputChangeHandler} ref={nameInputRef} value={enteredName} />
      </div>

      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  )
}

export default SimpleInput
