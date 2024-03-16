import { useState, useEffect, useContext } from "react";

import FormInput from "../../components/FormInput";
import { inputs } from "./inputs";
import './styles/LoginForm.css'
import { formStatusContext } from "../../context/formStatusContext";

const {email, password, confirmPassword} = inputs;

const inputsKeys = Object.keys(inputs);

const initialFormData = {};
const initialIsFormValid = {};

for (let key of inputsKeys) {

    initialFormData[key] = '';
    initialIsFormValid[key] = inputs[key].required ? false : true;
}



export default function LoginForm() {

    
    // formState can be : init | success | error
    const {formState, setFormState} = useContext(formStatusContext);

    const [isFormValid, setIsFormValid] = useState(initialIsFormValid);
    const [formData, setFormData] = useState(initialFormData);


    useEffect(() => {
        
        
        if (formState.status != 'init') {
            console.log('effect for NON INIT state');

            setTimeout(() => {
                setFormState({
                    status: 'init',
                    message: ''
                })
                if (formState.status == 'success') {
                    setFormData({ ...initialFormData })
                    setIsFormValid({ ...initialIsFormValid })
                }

            }, 1500)
        }

    }, [formState.status])


    function formChangeHandler(e) {
        
        const fieldName = e.target.name;
        const inputValue = e.target.value;

        const form = e.currentTarget;

        if (fieldName == confirmPassword.name) {
            
            setIsFormValid({
                ...isFormValid,
                [fieldName]: inputs[fieldName].tester(inputValue, form.password.value)
            })
        }
        else if (fieldName == password.name) {
            setIsFormValid({
                ...isFormValid, 
                [fieldName]: inputs[fieldName].tester(inputValue),

                confirmPassword: inputs.confirmPassword.tester(
                    formData.confirmPassword, inputValue
                )
            })
        }
        else {
            setIsFormValid({
                ...isFormValid, 
                [fieldName] : inputs[fieldName].tester(inputValue),
                
            })
        }

        setFormData({
            ...formData,
            [fieldName] : inputValue,
        })
    }

    function formSubmitHandler(e) {

        e.preventDefault();

        for (let key in isFormValid) {

            if (isFormValid[key] == false) {
                
                setFormState({
                    status: 'error',
                    message: inputs[key].errorMessage
                })
                return;
            }
        }

        setFormState({
            status: 'success', 
            message: 'Details Submitted Successfully'
        })

    }

    return (
        <form
            onChange={formChangeHandler}
            onSubmit={formSubmitHandler}
            id="login-form">

                {
                    inputsKeys.map(key => {
                        const inputDetails = {
                            ...inputs[key],
                            errorMessage: isFormValid[key] ? '' : inputs[key].errorMessage,
                        }

                        const value = formData[key];
                        
                        return (
                            <FormInput
                                key={key}
                                inputDetails={inputDetails}
                                value={value}
                            />
                        )
                    })
                }

                <button type="submit">Sign up</button>

        </form>
    )
}
