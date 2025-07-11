import { useNavigate } from "react-router-dom";

const ChatBody = () => {
  const navigate = useNavigate();

  const handleLeave = () => {
    localStorage.removeItem('name');
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
        <div className="message__chats">
          <p className="sender__name">you</p>
          <div className="message__sender">
            <p>hello</p>
          </div>
        </div>
        
        <div className="message__chats">
          <p>ta</p>
          <div className="message__recipient">
            <p>hi</p>
          </div>
        </div>
      </div>

      <div className="message_status">
        <p>someone is typing...</p>
      </div>

    </div>
  )
}

export default ChatBody;