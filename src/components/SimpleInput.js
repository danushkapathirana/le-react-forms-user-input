import React, { useRef, useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('')
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(true)
  const nameInputRef = useRef()

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value)
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault()

    if(enteredName.trim() === '') {
      setEnteredNameIsValid(false)
      return
    }

    setEnteredNameIsValid(true)

    console.log(enteredName)

    const enteredNameValue = nameInputRef.current.value
    console.log(enteredNameValue)

    // nameInputRef.current.value = '' //don't do this, not ideal, do not manipulate the real DOM
    setEnteredName('')
  }

  const nameInputClasses = enteredNameIsValid ? 'form-control' : 'form-control invalid'

  return(
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" onChange={nameInputChangeHandler} ref={nameInputRef} value={enteredName} />
        {!enteredNameIsValid && <p className="error-text">Name must not be empty.</p>}
      </div>

      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  )
}

export default SimpleInput
