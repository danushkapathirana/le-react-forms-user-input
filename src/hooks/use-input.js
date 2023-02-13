import { useState } from "react";

const useInput = (validateValue) => {
    const [enteredValue, setEnteredValue] = useState('')
    const [isTouched, setIsTouched] = useState(false)

    const valueIsValid = validateValue(enteredValue)
    const hasError = !valueIsValid && isTouched

    const valueInputChangeHandler = (event) => {
        setEnteredValue(event.target.value)
    }
    
    const valueInputBlurHandler = (event) => {
        setIsTouched(true)
    }

    const reset = () => {
        setEnteredValue('')
        setIsTouched(false)
    }

    return(
        {
            enteredValue: enteredValue,
            valueIsValid: valueIsValid,
            hasError: hasError,
            valueInputChangeHandler: valueInputChangeHandler,
            valueInputBlurHandler: valueInputBlurHandler,
            reset: reset
        }
    )
}

export default useInput
