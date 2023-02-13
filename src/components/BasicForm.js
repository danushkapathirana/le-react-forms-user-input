import React from "react";

import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const {
    enteredValue: enteredFirstName,
    valueIsValid: enteredFirstNameValueIsValid,
    hasError: firstNameInputHasError,
    valueInputChangeHandler: firstNameInputChangeHandler,
    valueInputBlurHandler: firstNameInputBlurHandler,
    reset: resetFirstNameInput
  } = useInput((value) => value.trim() !== '')

  const {
    enteredValue: enteredLastName,
    valueIsValid: enteredLastNameValueIsValid,
    hasError: lastNameInputHasError,
    valueInputChangeHandler: lastNameInputChangeHandler,
    valueInputBlurHandler: lastNameInputBlurHandler,
    reset: resetLastNameInput
  } = useInput((value) => value.trim() !== '')

  const {
    enteredValue: enteredEmail,
    valueIsValid: enteredEmailValueIsValid,
    hasError: emailInputHasError,
    valueInputChangeHandler: emailInputChangeHandler,
    valueInputBlurHandler: emailInputBlurHandler,
    reset: resetEmailInput
  } = useInput((value) => value.includes('@'))

  let formIsValid = false

  if(enteredFirstNameValueIsValid && enteredLastNameValueIsValid && enteredEmailValueIsValid) {
    formIsValid = true
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault()

    if(!formIsValid) {
      return
    }

    console.log(enteredFirstName)
    console.log(enteredLastName)
    console.log(enteredEmail)

    resetFirstNameInput()
    resetLastNameInput()
    resetEmailInput()
  }

  const firstNameInputClasses = firstNameInputHasError ? 'form-control invalid' : 'form-control'
  const lastNameInputClasses = lastNameInputHasError ? 'form-control invalid' : 'form-control'
  const emailInputClasses = emailInputHasError ? 'form-control invalid' : 'form-control'

  return(
    <form onSubmit={formSubmissionHandler}>
      <div className="control-group">
        <div className={firstNameInputClasses}>
          <label htmlFor="name">First Name</label>
          <input type="text" id="name" onChange={firstNameInputChangeHandler} onBlur={firstNameInputBlurHandler} value={enteredFirstName} />
          {firstNameInputHasError && <p className="error-text">First name must not be empty.</p>}
        </div>

        <div className={lastNameInputClasses}>
          <label htmlFor="name">Last Name</label>
          <input type="text" id="name" onChange={lastNameInputChangeHandler} onBlur={lastNameInputBlurHandler} value={enteredLastName} />
          {lastNameInputHasError && <p className="error-text">Last name must not be empty.</p>}
        </div>

        <div className={emailInputClasses}>
          <label htmlFor="email">E-Mail Address</label>
          <input type="email" id="email" onChange={emailInputChangeHandler} onBlur={emailInputBlurHandler} value={enteredEmail} />
          {emailInputHasError && <p className="error-text">Email name must not be empty.</p>}
        </div>

        <div className="form-actions">
          <button disabled={!formIsValid}>Submit</button>
        </div>
      </div>
    </form>
  )
}

export default BasicForm
