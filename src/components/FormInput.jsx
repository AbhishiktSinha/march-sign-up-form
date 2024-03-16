import { useContext, useEffect, useState } from 'react';
import './styles/FormInput.css'
import { formStatusContext } from '../context/formStatusContext';

export default function FormInput({inputDetails, value}) {

    const {type, name, label, placeholder, required, errorMessage, emptyError} = inputDetails;

    const [isInitialState, setIsInitialState] = useState(true);
    const [isFocused, setIsFocused] = useState(false);

    const {formState} = useContext(formStatusContext);


    const showEmptyError = !isFocused && !isInitialState;
    const isValidInput = (!Boolean(errorMessage) && (required ? Boolean(value) : true) );


    useEffect(()=>{
        if (formState.status == 'success') {
            setIsInitialState(true);
        }
    }, [formState.status])


    function focusChange(e) {
        setIsFocused(!isFocused);
        setIsInitialState(false);
    }

    return (
        <div className={"form-input-container" + (!isInitialState ? (isValidInput ? " valid" : " invalid") : '')}>
            <label htmlFor="name">{label}</label>
            <input
                name={name}
                type={type}
                label={label}
                placeholder={placeholder}
                required={required}
                value={value}
                onFocus={focusChange}
                onBlur={focusChange}
            />
            <p className="error-prompt">
                {
                    value == '' ? (
                        showEmptyError ? emptyError : ''
                    ) : (
                        errorMessage ? errorMessage : ''
                    )
                }
            </p>
        </div>
    )
}