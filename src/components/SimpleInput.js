import React, { useRef, useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('')
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false) //putting initial state is true is not good (even if it is for only to apply styles)
  const [enteredNameTouched, setEnteredNameTouched] = useState(false) //use to check whether user was tried to enter something or not
  const nameInputRef = useRef()

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value)

    // disappear the error msg (if it is displaying)
    if(event.target.value.trim() !== '') {
      setEnteredNameIsValid(true)
    }
  }

  // validate when input is lose focus (when user focus the input field and leave it as empty)
  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true)

    if(enteredName.trim() === '') {
      setEnteredNameIsValid(false)
      return
    }
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault()

    setEnteredNameTouched(true)

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

  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched

  const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control'

  return(
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" onChange={nameInputChangeHandler} onBlur={nameInputBlurHandler} ref={nameInputRef} value={enteredName} />
        {nameInputIsInvalid && <p className="error-text">Name must not be empty.</p>}
      </div>

      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  )
}

export default SimpleInput
