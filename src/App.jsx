import { useContext } from "react";
import LoginForm from "./features/LoginForm";
import ErrorMessage from "./components/ErrorMessage";
import SuccessMessage from './components/SuccessMessage.jsx'
import { formStatusContext } from "./context/formStatusContext";

import './App.css'

export default function App() {

  const {formState} = useContext(formStatusContext);

  const {status: formStatus, message} = formState;

  return (
    <div id="main">
      <LoginForm />
      {
        formStatus == 'success' && <SuccessMessage message={message} />
      }
      {
        formStatus == 'error' && <ErrorMessage message={message} />
      }
    </div>
  )
}