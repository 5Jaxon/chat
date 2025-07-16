import { useContext, useState } from "react";
import { Context } from '../App'
const ChatFooter = () => {
  const [message, setMessage] = useState('');
  const socket = useContext(Context);
  const handleSendMessage = (e) => {
    e.preventDefault();
    
    if (message.trim() && sessionStorage.getItem('userName')) {      
      socket.emit('message', {
        text: message,
        name: sessionStorage.getItem('userName'),
        id: `${socket.id}${Math.random()}`,
        socketID: socket.id,
      });
      
    }
    setMessage('');
  };

  return (
    <div className="chat__footer">
      <form className="form" onSubmit={handleSendMessage}>
        <input
        type="text"
        placeholder='编写消息'
        className="message"
        value={message}
        onChange={e => setMessage(e.target.value)}></input>
        <button className="sendBtn">发送</button>
      </form>
    </div>
  )
}

export default ChatFooter;