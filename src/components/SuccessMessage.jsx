import './styles/Message.css'

export default function SuccessMessage({message}) {

    return (
        <div className="success-modal-container">
            <div className="success-message-container">
                <h2>Success</h2>
                <p>{message}</p>
            </div>
        </div>
    )
}