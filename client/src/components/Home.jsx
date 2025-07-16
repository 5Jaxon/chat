import { useState } from "react"
import { useNavigate } from "react-router-dom"
const Home = ({socket}) => {
  const navigate = useNavigate();
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    sessionStorage.setItem('userName', name);
    sessionStorage.setItem('id', socket.id);    
    socket.emit('newUser', {userName: name, socketID: socket.id })
    navigate('chat');    
  }

  return (
    <form className="home__container" onSubmit={handleSubmit}>
      <h2 className="home__header">登录聊天</h2>
      <label htmlFor="userName">用户名</label>
      <input name="userName" onChange={e => setName(e.target.value)}
      value={name} className="home__input"></input>
      <button type="submit" className="home__cta">登录</button>
    </form>
  )
}

export default Home;