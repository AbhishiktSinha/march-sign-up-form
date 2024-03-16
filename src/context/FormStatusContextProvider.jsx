import { formStatusContext } from "./formStatusContext";
import { useState } from "react";

export default function FromStatusContextProvider({ children }) {

    const [formState, setFormState] = useState({
        status: 'init', message: ''
    });

    return (
        <formStatusContext.Provider value={{
            formState: formState,
            setFormState: setFormState
        }}>

            {children}

        </formStatusContext.Provider>
    )
}