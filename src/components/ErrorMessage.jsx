import './styles/Message.css'

export default function ErrorMessage({message}) {

    return (
        <div className="error-modal-container">
            <div className="error-message-container">
                <h2>Error!</h2>
                <p>{message}</p>
            </div>
        </div>
    )
}