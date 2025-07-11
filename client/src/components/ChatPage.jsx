import ChatBar from './ChatBar';
import ChatFooter from './ChatFooter'
import ChatBody from './ChatBody';
import { useEffect, useState } from 'react';


const ChatPage = ({socket}) => {
  const [message, setMessage] = useState([]);

  useEffect(() => {
    const handler = (data) => {
      setMessage([...message, data]);
      console.log(message);
      
   };
    socket.on('messageResponse', handler);
    return () => socket.off('messageResponse', handler);
  }, [socket, message]);
  return (
    <div className='chat'>
      <ChatBar/>
      <div className='chat__main'>
        <ChatBody message={message}></ChatBody>
        <ChatFooter></ChatFooter>
      </div>
    </div>
  );
}

export default ChatPage;