import { useNavigate } from "react-router-dom";

const ChatBody = ({messages}) => {
  const navigate = useNavigate();

  const handleLeave = () => {
    sessionStorage.removeItem('name');
    navigate('/');
    window.location.reload();
  }
  return (
    <div>
      <header className='chat__mainHeader'>
        <p>chat with ta</p>
        <button className="leaveChat__btn" onClick={handleLeave}>
          leave chat
        </button>
      </header>

      <div className="message__container">
        { messages.map((message) => 
          message.socketID === sessionStorage.getItem('id') ? (
            <div className="message__chats" key={message.id}>
              <p className="sender__name">you</p>
              <div className="message__sender">
                <p>{message.text}</p>
              </div>
            </div>
          ) : (
            <div className="message__chats">
              <p className="recipient__name">{message.name}</p>
              <div className="message__recipient">
                <p>{message.text}</p>
              </div>
            </div>
          )
        )}

      </div>

    </div>
  )
}

export default ChatBody;