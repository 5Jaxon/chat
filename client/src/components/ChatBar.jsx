import { useContext, useEffect, useState } from "react";
import { Context } from "../App";
const ChatBar = () => {
  const socket = useContext(Context);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    socket.on('newUserResponse', (data) => setUsers(data));
  }, [socket, users])
  return (
    <div className="chat__sidebar">
      <p className="chat__header">在线用户</p>
      <div className="chat__users">
        {users.map((user) => <p key={user.socketID}>{user.userName}</p>)}
      </div>
    </div>
  )
}

export default ChatBar;