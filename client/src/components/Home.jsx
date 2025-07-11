import { useState } from "react"
import { useNavigate } from "react-router-dom"
const Home = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');

  const handleSubmit = () => {
    localStorage.setItem('userName', name);
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